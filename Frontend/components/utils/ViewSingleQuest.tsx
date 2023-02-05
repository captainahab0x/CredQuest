import {
  Box,
  Button,
  Flex,
  SkeletonCircle,
  Spinner,
  Text,
  VStack,
} from "@chakra-ui/react";
import { useQuery } from "react-query";
import { QuestResponse } from "../../utils/models";
import {
  QuestService,
  OrganizationService,
  LancerService,
  UtilService,
} from "../../services";
import { useAccount } from "wagmi";
import { useQuestContext } from "../../providers/Quest";
import { useRouter } from "next/router";
import Image from "next/image";
import { useCallback, useEffect, useMemo, useState } from "react";
import { CreateProposalModal, ViewQuestInfoModal } from "../Modals";

interface ComponentProps extends QuestResponse {
  handleUpdate: (quest?: QuestResponse) => void;
}

export const ViewSingleQuest: React.FC<QuestResponse> = ({ ...quest }) => {
  const { updateSelectedQuest, updateEditQuestStatus } = useQuestContext()!;
  const router = useRouter();
  const [image, setImage] = useState();
  const { address } = useAccount();
  const { questCID, id, orgId } = quest;
  const { data, isLoading } = useQuery([`Quest-${id}`, questCID], () =>
    QuestService.fetchQuestByCID(questCID)
  );
  const { data: organization } = useQuery(
    ["organization.id", orgId],
    () => OrganizationService.findOrganizationById(orgId),
    {
      enabled: !!orgId,
    }
  );
  const { data: userAsOrg } = useQuery(
    ["organization.address", address],
    () => OrganizationService.findOrganizationByAddress(address ?? ""),
    {
      enabled: !!address,
    }
  );
  const { data: lancer } = useQuery(
    ["lancer.profile", address],
    () => LancerService.fecthLancer(address ?? ""),
    {
      enabled: !!address,
      retry: 2,
    }
  );
  useEffect(() => {
    const fetchData = async () => {
      if (organization?.org) {
        const image = await UtilService.fetchLightHouseImage(
          organization.org.imageCID
        );
        console.log({ imageData: image.data });
        // setImage(image.data.upload[0] as any);
      }
    };

    fetchData();
  }, [organization?.org]);
  const initiateQuestUpdate = () => {
    updateSelectedQuest(quest);
    updateEditQuestStatus(true);
    router.push("/quests?tab=1");
  };
  console.log({ image });

  return isLoading ? (
    <Spinner />
  ) : (
    <Flex alignItems="stretch" justifyContent="flex-start" gap="4">
      <Box>
        <SkeletonCircle size="20" isLoaded={!!organization}>
          <Text>{organization?.org.name}</Text>
          <Image src={image as any as string} />
        </SkeletonCircle>
      </Box>

      <Box
        as={Flex}
        flex="1"
        display="flex"
        direction="column"
        alignItems="flex-start"
        justifyContent="space-evenly"
      >
        <Text fontWeight="bold">{data.title}</Text>
        <Text noOfLines={2} mt="3">
          {data.description}
        </Text>
      </Box>

      <VStack>
        {lancer?.registered && orgId !== userAsOrg?.org?.id ? (
          <CreateProposalModal questId={id} />
        ) : (
          <Button
            onClick={() => initiateQuestUpdate()}
            colorScheme="pink"
            w="100%"
          >
            Update
          </Button>
        )}

        <ViewQuestInfoModal questId={id} />
      </VStack>
    </Flex>
  );
};