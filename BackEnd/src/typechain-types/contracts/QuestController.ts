/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import type {
  BaseContract,
  BigNumber,
  BigNumberish,
  BytesLike,
  CallOverrides,
  ContractTransaction,
  Overrides,
  PayableOverrides,
  PopulatedTransaction,
  Signer,
  utils,
} from "ethers";
import type {
  FunctionFragment,
  Result,
  EventFragment,
} from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type {
  TypedEventFilter,
  TypedEvent,
  TypedListener,
  OnEvent,
  PromiseOrValue,
} from "../common";

export interface QuestControllerInterface extends utils.Interface {
  functions: {
    "acceptProposal(uint256)": FunctionFragment;
    "acceptWork(uint256)": FunctionFragment;
    "balanceOf(address)": FunctionFragment;
    "createQuest(bytes,uint256,uint256,uint256,bytes,uint256)": FunctionFragment;
    "credential()": FunctionFragment;
    "nonceUsed(uint256)": FunctionFragment;
    "organizationController()": FunctionFragment;
    "owner()": FunctionFragment;
    "pause()": FunctionFragment;
    "paused()": FunctionFragment;
    "proposalExists(uint256)": FunctionFragment;
    "proposalIds(uint256,address)": FunctionFragment;
    "proposals(uint256)": FunctionFragment;
    "questExists(uint256)": FunctionFragment;
    "quests(uint256)": FunctionFragment;
    "rejectProposal(uint256)": FunctionFragment;
    "renounceOwnership()": FunctionFragment;
    "sendProposal(uint256,bytes,bytes,uint256)": FunctionFragment;
    "setSigner(address)": FunctionFragment;
    "signer()": FunctionFragment;
    "statusOfQuest(uint256)": FunctionFragment;
    "submitWork(uint256,bytes,bytes,uint256)": FunctionFragment;
    "totalProposals()": FunctionFragment;
    "totalQuests()": FunctionFragment;
    "transferOwnership(address)": FunctionFragment;
    "unpause()": FunctionFragment;
    "withdraw(address)": FunctionFragment;
  };

  getFunction(
    nameOrSignatureOrTopic:
      | "acceptProposal"
      | "acceptWork"
      | "balanceOf"
      | "createQuest"
      | "credential"
      | "nonceUsed"
      | "organizationController"
      | "owner"
      | "pause"
      | "paused"
      | "proposalExists"
      | "proposalIds"
      | "proposals"
      | "questExists"
      | "quests"
      | "rejectProposal"
      | "renounceOwnership"
      | "sendProposal"
      | "setSigner"
      | "signer"
      | "statusOfQuest"
      | "submitWork"
      | "totalProposals"
      | "totalQuests"
      | "transferOwnership"
      | "unpause"
      | "withdraw"
  ): FunctionFragment;

  encodeFunctionData(
    functionFragment: "acceptProposal",
    values: [PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(
    functionFragment: "acceptWork",
    values: [PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(
    functionFragment: "balanceOf",
    values: [PromiseOrValue<string>]
  ): string;
  encodeFunctionData(
    functionFragment: "createQuest",
    values: [
      PromiseOrValue<BytesLike>,
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<BytesLike>,
      PromiseOrValue<BigNumberish>
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "credential",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "nonceUsed",
    values: [PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(
    functionFragment: "organizationController",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "owner", values?: undefined): string;
  encodeFunctionData(functionFragment: "pause", values?: undefined): string;
  encodeFunctionData(functionFragment: "paused", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "proposalExists",
    values: [PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(
    functionFragment: "proposalIds",
    values: [PromiseOrValue<BigNumberish>, PromiseOrValue<string>]
  ): string;
  encodeFunctionData(
    functionFragment: "proposals",
    values: [PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(
    functionFragment: "questExists",
    values: [PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(
    functionFragment: "quests",
    values: [PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(
    functionFragment: "rejectProposal",
    values: [PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(
    functionFragment: "renounceOwnership",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "sendProposal",
    values: [
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<BytesLike>,
      PromiseOrValue<BytesLike>,
      PromiseOrValue<BigNumberish>
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "setSigner",
    values: [PromiseOrValue<string>]
  ): string;
  encodeFunctionData(functionFragment: "signer", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "statusOfQuest",
    values: [PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(
    functionFragment: "submitWork",
    values: [
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<BytesLike>,
      PromiseOrValue<BytesLike>,
      PromiseOrValue<BigNumberish>
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "totalProposals",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "totalQuests",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "transferOwnership",
    values: [PromiseOrValue<string>]
  ): string;
  encodeFunctionData(functionFragment: "unpause", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "withdraw",
    values: [PromiseOrValue<string>]
  ): string;

  decodeFunctionResult(
    functionFragment: "acceptProposal",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "acceptWork", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "balanceOf", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "createQuest",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "credential", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "nonceUsed", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "organizationController",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "owner", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "pause", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "paused", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "proposalExists",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "proposalIds",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "proposals", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "questExists",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "quests", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "rejectProposal",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "renounceOwnership",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "sendProposal",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "setSigner", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "signer", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "statusOfQuest",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "submitWork", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "totalProposals",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "totalQuests",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "transferOwnership",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "unpause", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "withdraw", data: BytesLike): Result;

  events: {
    "FundTransferred(address,address,uint256)": EventFragment;
    "OwnershipTransferred(address,address)": EventFragment;
    "Paused(address)": EventFragment;
    "ProposalCreated(uint256,uint256,address,bytes)": EventFragment;
    "ProposalStatusChanged(uint256,uint256,uint8,uint8)": EventFragment;
    "QuestCreated(uint256,uint256,bytes,uint256,uint256)": EventFragment;
    "Unpaused(address)": EventFragment;
    "WorkSubmitted(uint256,uint256,address,bytes)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "FundTransferred"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "OwnershipTransferred"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "Paused"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "ProposalCreated"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "ProposalStatusChanged"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "QuestCreated"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "Unpaused"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "WorkSubmitted"): EventFragment;
}

export interface FundTransferredEventObject {
  lancer: string;
  withdrawalAddress: string;
  amount: BigNumber;
}
export type FundTransferredEvent = TypedEvent<
  [string, string, BigNumber],
  FundTransferredEventObject
>;

export type FundTransferredEventFilter = TypedEventFilter<FundTransferredEvent>;

export interface OwnershipTransferredEventObject {
  previousOwner: string;
  newOwner: string;
}
export type OwnershipTransferredEvent = TypedEvent<
  [string, string],
  OwnershipTransferredEventObject
>;

export type OwnershipTransferredEventFilter =
  TypedEventFilter<OwnershipTransferredEvent>;

export interface PausedEventObject {
  account: string;
}
export type PausedEvent = TypedEvent<[string], PausedEventObject>;

export type PausedEventFilter = TypedEventFilter<PausedEvent>;

export interface ProposalCreatedEventObject {
  questId: BigNumber;
  proposalId: BigNumber;
  proposer: string;
  proposalCID: string;
}
export type ProposalCreatedEvent = TypedEvent<
  [BigNumber, BigNumber, string, string],
  ProposalCreatedEventObject
>;

export type ProposalCreatedEventFilter = TypedEventFilter<ProposalCreatedEvent>;

export interface ProposalStatusChangedEventObject {
  questId: BigNumber;
  proposalId: BigNumber;
  oldStatus: number;
  newStatus: number;
}
export type ProposalStatusChangedEvent = TypedEvent<
  [BigNumber, BigNumber, number, number],
  ProposalStatusChangedEventObject
>;

export type ProposalStatusChangedEventFilter =
  TypedEventFilter<ProposalStatusChangedEvent>;

export interface QuestCreatedEventObject {
  questId: BigNumber;
  organizationId: BigNumber;
  questCID: string;
  deadline: BigNumber;
  reward: BigNumber;
}
export type QuestCreatedEvent = TypedEvent<
  [BigNumber, BigNumber, string, BigNumber, BigNumber],
  QuestCreatedEventObject
>;

export type QuestCreatedEventFilter = TypedEventFilter<QuestCreatedEvent>;

export interface UnpausedEventObject {
  account: string;
}
export type UnpausedEvent = TypedEvent<[string], UnpausedEventObject>;

export type UnpausedEventFilter = TypedEventFilter<UnpausedEvent>;

export interface WorkSubmittedEventObject {
  questId: BigNumber;
  proposalId: BigNumber;
  worker: string;
  workCID: string;
}
export type WorkSubmittedEvent = TypedEvent<
  [BigNumber, BigNumber, string, string],
  WorkSubmittedEventObject
>;

export type WorkSubmittedEventFilter = TypedEventFilter<WorkSubmittedEvent>;

export interface QuestController extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: QuestControllerInterface;

  queryFilter<TEvent extends TypedEvent>(
    event: TypedEventFilter<TEvent>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TEvent>>;

  listeners<TEvent extends TypedEvent>(
    eventFilter?: TypedEventFilter<TEvent>
  ): Array<TypedListener<TEvent>>;
  listeners(eventName?: string): Array<Listener>;
  removeAllListeners<TEvent extends TypedEvent>(
    eventFilter: TypedEventFilter<TEvent>
  ): this;
  removeAllListeners(eventName?: string): this;
  off: OnEvent<this>;
  on: OnEvent<this>;
  once: OnEvent<this>;
  removeListener: OnEvent<this>;

  functions: {
    acceptProposal(
      proposalId: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    acceptWork(
      proposalId: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    balanceOf(
      arg0: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    createQuest(
      questCID: PromiseOrValue<BytesLike>,
      reward: PromiseOrValue<BigNumberish>,
      orgId: PromiseOrValue<BigNumberish>,
      deadline: PromiseOrValue<BigNumberish>,
      signature: PromiseOrValue<BytesLike>,
      nonce: PromiseOrValue<BigNumberish>,
      overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    credential(overrides?: CallOverrides): Promise<[string]>;

    nonceUsed(
      arg0: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<[boolean]>;

    organizationController(overrides?: CallOverrides): Promise<[string]>;

    owner(overrides?: CallOverrides): Promise<[string]>;

    pause(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    paused(overrides?: CallOverrides): Promise<[boolean]>;

    proposalExists(
      proposalId: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<[boolean]>;

    proposalIds(
      arg0: PromiseOrValue<BigNumberish>,
      arg1: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    proposals(
      arg0: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<
      [BigNumber, string, string, BigNumber, number, string] & {
        id: BigNumber;
        cid: string;
        proposer: string;
        questId: BigNumber;
        status: number;
        workCID: string;
      }
    >;

    questExists(
      questId: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<[boolean]>;

    quests(
      arg0: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<
      [BigNumber, string, BigNumber, BigNumber, BigNumber, BigNumber] & {
        id: BigNumber;
        cid: string;
        reward: BigNumber;
        orgId: BigNumber;
        deadline: BigNumber;
        winnerProposalId: BigNumber;
      }
    >;

    rejectProposal(
      proposalId: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    renounceOwnership(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    sendProposal(
      questId: PromiseOrValue<BigNumberish>,
      proposalCID: PromiseOrValue<BytesLike>,
      signature: PromiseOrValue<BytesLike>,
      nonce: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    setSigner(
      newSigner: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    signer(overrides?: CallOverrides): Promise<[string]>;

    statusOfQuest(
      questId: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<[number]>;

    submitWork(
      questId: PromiseOrValue<BigNumberish>,
      workCID: PromiseOrValue<BytesLike>,
      signature: PromiseOrValue<BytesLike>,
      nonce: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    totalProposals(overrides?: CallOverrides): Promise<[BigNumber]>;

    totalQuests(overrides?: CallOverrides): Promise<[BigNumber]>;

    transferOwnership(
      newOwner: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    unpause(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    withdraw(
      withdrawalAddress: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;
  };

  acceptProposal(
    proposalId: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  acceptWork(
    proposalId: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  balanceOf(
    arg0: PromiseOrValue<string>,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  createQuest(
    questCID: PromiseOrValue<BytesLike>,
    reward: PromiseOrValue<BigNumberish>,
    orgId: PromiseOrValue<BigNumberish>,
    deadline: PromiseOrValue<BigNumberish>,
    signature: PromiseOrValue<BytesLike>,
    nonce: PromiseOrValue<BigNumberish>,
    overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  credential(overrides?: CallOverrides): Promise<string>;

  nonceUsed(
    arg0: PromiseOrValue<BigNumberish>,
    overrides?: CallOverrides
  ): Promise<boolean>;

  organizationController(overrides?: CallOverrides): Promise<string>;

  owner(overrides?: CallOverrides): Promise<string>;

  pause(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  paused(overrides?: CallOverrides): Promise<boolean>;

  proposalExists(
    proposalId: PromiseOrValue<BigNumberish>,
    overrides?: CallOverrides
  ): Promise<boolean>;

  proposalIds(
    arg0: PromiseOrValue<BigNumberish>,
    arg1: PromiseOrValue<string>,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  proposals(
    arg0: PromiseOrValue<BigNumberish>,
    overrides?: CallOverrides
  ): Promise<
    [BigNumber, string, string, BigNumber, number, string] & {
      id: BigNumber;
      cid: string;
      proposer: string;
      questId: BigNumber;
      status: number;
      workCID: string;
    }
  >;

  questExists(
    questId: PromiseOrValue<BigNumberish>,
    overrides?: CallOverrides
  ): Promise<boolean>;

  quests(
    arg0: PromiseOrValue<BigNumberish>,
    overrides?: CallOverrides
  ): Promise<
    [BigNumber, string, BigNumber, BigNumber, BigNumber, BigNumber] & {
      id: BigNumber;
      cid: string;
      reward: BigNumber;
      orgId: BigNumber;
      deadline: BigNumber;
      winnerProposalId: BigNumber;
    }
  >;

  rejectProposal(
    proposalId: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  renounceOwnership(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  sendProposal(
    questId: PromiseOrValue<BigNumberish>,
    proposalCID: PromiseOrValue<BytesLike>,
    signature: PromiseOrValue<BytesLike>,
    nonce: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  setSigner(
    newSigner: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  statusOfQuest(
    questId: PromiseOrValue<BigNumberish>,
    overrides?: CallOverrides
  ): Promise<number>;

  submitWork(
    questId: PromiseOrValue<BigNumberish>,
    workCID: PromiseOrValue<BytesLike>,
    signature: PromiseOrValue<BytesLike>,
    nonce: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  totalProposals(overrides?: CallOverrides): Promise<BigNumber>;

  totalQuests(overrides?: CallOverrides): Promise<BigNumber>;

  transferOwnership(
    newOwner: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  unpause(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  withdraw(
    withdrawalAddress: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  callStatic: {
    acceptProposal(
      proposalId: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<void>;

    acceptWork(
      proposalId: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<void>;

    balanceOf(
      arg0: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    createQuest(
      questCID: PromiseOrValue<BytesLike>,
      reward: PromiseOrValue<BigNumberish>,
      orgId: PromiseOrValue<BigNumberish>,
      deadline: PromiseOrValue<BigNumberish>,
      signature: PromiseOrValue<BytesLike>,
      nonce: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<void>;

    credential(overrides?: CallOverrides): Promise<string>;

    nonceUsed(
      arg0: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<boolean>;

    organizationController(overrides?: CallOverrides): Promise<string>;

    owner(overrides?: CallOverrides): Promise<string>;

    pause(overrides?: CallOverrides): Promise<void>;

    paused(overrides?: CallOverrides): Promise<boolean>;

    proposalExists(
      proposalId: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<boolean>;

    proposalIds(
      arg0: PromiseOrValue<BigNumberish>,
      arg1: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    proposals(
      arg0: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<
      [BigNumber, string, string, BigNumber, number, string] & {
        id: BigNumber;
        cid: string;
        proposer: string;
        questId: BigNumber;
        status: number;
        workCID: string;
      }
    >;

    questExists(
      questId: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<boolean>;

    quests(
      arg0: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<
      [BigNumber, string, BigNumber, BigNumber, BigNumber, BigNumber] & {
        id: BigNumber;
        cid: string;
        reward: BigNumber;
        orgId: BigNumber;
        deadline: BigNumber;
        winnerProposalId: BigNumber;
      }
    >;

    rejectProposal(
      proposalId: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<void>;

    renounceOwnership(overrides?: CallOverrides): Promise<void>;

    sendProposal(
      questId: PromiseOrValue<BigNumberish>,
      proposalCID: PromiseOrValue<BytesLike>,
      signature: PromiseOrValue<BytesLike>,
      nonce: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<void>;

    setSigner(
      newSigner: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<void>;

    signer(overrides?: CallOverrides): Promise<string>;

    statusOfQuest(
      questId: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<number>;

    submitWork(
      questId: PromiseOrValue<BigNumberish>,
      workCID: PromiseOrValue<BytesLike>,
      signature: PromiseOrValue<BytesLike>,
      nonce: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<void>;

    totalProposals(overrides?: CallOverrides): Promise<BigNumber>;

    totalQuests(overrides?: CallOverrides): Promise<BigNumber>;

    transferOwnership(
      newOwner: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<void>;

    unpause(overrides?: CallOverrides): Promise<void>;

    withdraw(
      withdrawalAddress: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<void>;
  };

  filters: {
    "FundTransferred(address,address,uint256)"(
      lancer?: PromiseOrValue<string> | null,
      withdrawalAddress?: PromiseOrValue<string> | null,
      amount?: null
    ): FundTransferredEventFilter;
    FundTransferred(
      lancer?: PromiseOrValue<string> | null,
      withdrawalAddress?: PromiseOrValue<string> | null,
      amount?: null
    ): FundTransferredEventFilter;

    "OwnershipTransferred(address,address)"(
      previousOwner?: PromiseOrValue<string> | null,
      newOwner?: PromiseOrValue<string> | null
    ): OwnershipTransferredEventFilter;
    OwnershipTransferred(
      previousOwner?: PromiseOrValue<string> | null,
      newOwner?: PromiseOrValue<string> | null
    ): OwnershipTransferredEventFilter;

    "Paused(address)"(account?: null): PausedEventFilter;
    Paused(account?: null): PausedEventFilter;

    "ProposalCreated(uint256,uint256,address,bytes)"(
      questId?: PromiseOrValue<BigNumberish> | null,
      proposalId?: PromiseOrValue<BigNumberish> | null,
      proposer?: PromiseOrValue<string> | null,
      proposalCID?: null
    ): ProposalCreatedEventFilter;
    ProposalCreated(
      questId?: PromiseOrValue<BigNumberish> | null,
      proposalId?: PromiseOrValue<BigNumberish> | null,
      proposer?: PromiseOrValue<string> | null,
      proposalCID?: null
    ): ProposalCreatedEventFilter;

    "ProposalStatusChanged(uint256,uint256,uint8,uint8)"(
      questId?: PromiseOrValue<BigNumberish> | null,
      proposalId?: PromiseOrValue<BigNumberish> | null,
      oldStatus?: null,
      newStatus?: null
    ): ProposalStatusChangedEventFilter;
    ProposalStatusChanged(
      questId?: PromiseOrValue<BigNumberish> | null,
      proposalId?: PromiseOrValue<BigNumberish> | null,
      oldStatus?: null,
      newStatus?: null
    ): ProposalStatusChangedEventFilter;

    "QuestCreated(uint256,uint256,bytes,uint256,uint256)"(
      questId?: PromiseOrValue<BigNumberish> | null,
      organizationId?: PromiseOrValue<BigNumberish> | null,
      questCID?: null,
      deadline?: null,
      reward?: null
    ): QuestCreatedEventFilter;
    QuestCreated(
      questId?: PromiseOrValue<BigNumberish> | null,
      organizationId?: PromiseOrValue<BigNumberish> | null,
      questCID?: null,
      deadline?: null,
      reward?: null
    ): QuestCreatedEventFilter;

    "Unpaused(address)"(account?: null): UnpausedEventFilter;
    Unpaused(account?: null): UnpausedEventFilter;

    "WorkSubmitted(uint256,uint256,address,bytes)"(
      questId?: PromiseOrValue<BigNumberish> | null,
      proposalId?: PromiseOrValue<BigNumberish> | null,
      worker?: PromiseOrValue<string> | null,
      workCID?: null
    ): WorkSubmittedEventFilter;
    WorkSubmitted(
      questId?: PromiseOrValue<BigNumberish> | null,
      proposalId?: PromiseOrValue<BigNumberish> | null,
      worker?: PromiseOrValue<string> | null,
      workCID?: null
    ): WorkSubmittedEventFilter;
  };

  estimateGas: {
    acceptProposal(
      proposalId: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    acceptWork(
      proposalId: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    balanceOf(
      arg0: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    createQuest(
      questCID: PromiseOrValue<BytesLike>,
      reward: PromiseOrValue<BigNumberish>,
      orgId: PromiseOrValue<BigNumberish>,
      deadline: PromiseOrValue<BigNumberish>,
      signature: PromiseOrValue<BytesLike>,
      nonce: PromiseOrValue<BigNumberish>,
      overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    credential(overrides?: CallOverrides): Promise<BigNumber>;

    nonceUsed(
      arg0: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    organizationController(overrides?: CallOverrides): Promise<BigNumber>;

    owner(overrides?: CallOverrides): Promise<BigNumber>;

    pause(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    paused(overrides?: CallOverrides): Promise<BigNumber>;

    proposalExists(
      proposalId: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    proposalIds(
      arg0: PromiseOrValue<BigNumberish>,
      arg1: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    proposals(
      arg0: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    questExists(
      questId: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    quests(
      arg0: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    rejectProposal(
      proposalId: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    renounceOwnership(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    sendProposal(
      questId: PromiseOrValue<BigNumberish>,
      proposalCID: PromiseOrValue<BytesLike>,
      signature: PromiseOrValue<BytesLike>,
      nonce: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    setSigner(
      newSigner: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    signer(overrides?: CallOverrides): Promise<BigNumber>;

    statusOfQuest(
      questId: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    submitWork(
      questId: PromiseOrValue<BigNumberish>,
      workCID: PromiseOrValue<BytesLike>,
      signature: PromiseOrValue<BytesLike>,
      nonce: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    totalProposals(overrides?: CallOverrides): Promise<BigNumber>;

    totalQuests(overrides?: CallOverrides): Promise<BigNumber>;

    transferOwnership(
      newOwner: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    unpause(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    withdraw(
      withdrawalAddress: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    acceptProposal(
      proposalId: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    acceptWork(
      proposalId: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    balanceOf(
      arg0: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    createQuest(
      questCID: PromiseOrValue<BytesLike>,
      reward: PromiseOrValue<BigNumberish>,
      orgId: PromiseOrValue<BigNumberish>,
      deadline: PromiseOrValue<BigNumberish>,
      signature: PromiseOrValue<BytesLike>,
      nonce: PromiseOrValue<BigNumberish>,
      overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    credential(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    nonceUsed(
      arg0: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    organizationController(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    owner(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    pause(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    paused(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    proposalExists(
      proposalId: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    proposalIds(
      arg0: PromiseOrValue<BigNumberish>,
      arg1: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    proposals(
      arg0: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    questExists(
      questId: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    quests(
      arg0: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    rejectProposal(
      proposalId: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    renounceOwnership(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    sendProposal(
      questId: PromiseOrValue<BigNumberish>,
      proposalCID: PromiseOrValue<BytesLike>,
      signature: PromiseOrValue<BytesLike>,
      nonce: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    setSigner(
      newSigner: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    signer(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    statusOfQuest(
      questId: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    submitWork(
      questId: PromiseOrValue<BigNumberish>,
      workCID: PromiseOrValue<BytesLike>,
      signature: PromiseOrValue<BytesLike>,
      nonce: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    totalProposals(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    totalQuests(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    transferOwnership(
      newOwner: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    unpause(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    withdraw(
      withdrawalAddress: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;
  };
}
