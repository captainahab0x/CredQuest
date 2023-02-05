import { BASE_URL, LIGHTHOUSE_URL } from "../utils/constants";
import { QuestProposalType } from "../utils/models";

export class ProposalService {
  static async createProposal({ questId, ...proposal }: any) {
    return fetch(`${BASE_URL}/proposal/${questId}`, {
      body: JSON.stringify(proposal),
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
    }).then((res) => res.json());
  }

  static async fetchProposalsbyQuestId(
    questID: number
  ): Promise<{ proposals: QuestProposalType[] }> {
    return fetch(`${BASE_URL}/proposal/questId/${questID}`, {
      method: "GET",
    }).then((res) => res.json());
  }

  static async fetchQuestByCID(cid: string) {
    return fetch(`${LIGHTHOUSE_URL}${cid.substring(2)}`, {
      method: "GET",
    }).then((res) => res.json());
  }
}
