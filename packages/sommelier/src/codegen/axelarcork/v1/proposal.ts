import { CellarIDSet, CellarIDSetAmino, CellarIDSetSDKType, ChainConfiguration, ChainConfigurationAmino, ChainConfigurationSDKType } from "./axelarcork";
import { Coin, CoinAmino, CoinSDKType } from "../../cosmos/base/v1beta1/coin";
import { BinaryWriter } from "../../binary";
import { isSet } from "../../helpers";
export interface AddAxelarManagedCellarIDsProposal {
  title: string;
  description: string;
  chainId: bigint;
  cellarIds?: CellarIDSet;
  publisherDomain: string;
}
export interface AddAxelarManagedCellarIDsProposalProtoMsg {
  typeUrl: "/axelarcork.v1.AddAxelarManagedCellarIDsProposal";
  value: Uint8Array;
}
export interface AddAxelarManagedCellarIDsProposalAmino {
  title?: string;
  description?: string;
  chain_id?: string;
  cellar_ids?: CellarIDSetAmino;
  publisher_domain?: string;
}
export interface AddAxelarManagedCellarIDsProposalAminoMsg {
  type: "/axelarcork.v1.AddAxelarManagedCellarIDsProposal";
  value: AddAxelarManagedCellarIDsProposalAmino;
}
export interface AddAxelarManagedCellarIDsProposalSDKType {
  title: string;
  description: string;
  chain_id: bigint;
  cellar_ids?: CellarIDSetSDKType;
  publisher_domain: string;
}
/** AddAxelarManagedCellarIDsProposalWithDeposit is a specific definition for CLI commands */
export interface AddAxelarManagedCellarIDsProposalWithDeposit {
  title: string;
  description: string;
  chainId: bigint;
  cellarIds: string[];
  publisherDomain: string;
  deposit: string;
}
export interface AddAxelarManagedCellarIDsProposalWithDepositProtoMsg {
  typeUrl: "/axelarcork.v1.AddAxelarManagedCellarIDsProposalWithDeposit";
  value: Uint8Array;
}
/** AddAxelarManagedCellarIDsProposalWithDeposit is a specific definition for CLI commands */
export interface AddAxelarManagedCellarIDsProposalWithDepositAmino {
  title?: string;
  description?: string;
  chain_id?: string;
  cellar_ids?: string[];
  publisher_domain?: string;
  deposit?: string;
}
export interface AddAxelarManagedCellarIDsProposalWithDepositAminoMsg {
  type: "/axelarcork.v1.AddAxelarManagedCellarIDsProposalWithDeposit";
  value: AddAxelarManagedCellarIDsProposalWithDepositAmino;
}
/** AddAxelarManagedCellarIDsProposalWithDeposit is a specific definition for CLI commands */
export interface AddAxelarManagedCellarIDsProposalWithDepositSDKType {
  title: string;
  description: string;
  chain_id: bigint;
  cellar_ids: string[];
  publisher_domain: string;
  deposit: string;
}
export interface RemoveAxelarManagedCellarIDsProposal {
  title: string;
  description: string;
  chainId: bigint;
  cellarIds?: CellarIDSet;
}
export interface RemoveAxelarManagedCellarIDsProposalProtoMsg {
  typeUrl: "/axelarcork.v1.RemoveAxelarManagedCellarIDsProposal";
  value: Uint8Array;
}
export interface RemoveAxelarManagedCellarIDsProposalAmino {
  title?: string;
  description?: string;
  chain_id?: string;
  cellar_ids?: CellarIDSetAmino;
}
export interface RemoveAxelarManagedCellarIDsProposalAminoMsg {
  type: "/axelarcork.v1.RemoveAxelarManagedCellarIDsProposal";
  value: RemoveAxelarManagedCellarIDsProposalAmino;
}
export interface RemoveAxelarManagedCellarIDsProposalSDKType {
  title: string;
  description: string;
  chain_id: bigint;
  cellar_ids?: CellarIDSetSDKType;
}
/** RemoveAxelarManagedCellarIDsProposalWithDeposit is a specific definition for CLI commands */
export interface RemoveAxelarManagedCellarIDsProposalWithDeposit {
  title: string;
  description: string;
  chainId: bigint;
  cellarIds: string[];
  deposit: string;
}
export interface RemoveAxelarManagedCellarIDsProposalWithDepositProtoMsg {
  typeUrl: "/axelarcork.v1.RemoveAxelarManagedCellarIDsProposalWithDeposit";
  value: Uint8Array;
}
/** RemoveAxelarManagedCellarIDsProposalWithDeposit is a specific definition for CLI commands */
export interface RemoveAxelarManagedCellarIDsProposalWithDepositAmino {
  title?: string;
  description?: string;
  chain_id?: string;
  cellar_ids?: string[];
  deposit?: string;
}
export interface RemoveAxelarManagedCellarIDsProposalWithDepositAminoMsg {
  type: "/axelarcork.v1.RemoveAxelarManagedCellarIDsProposalWithDeposit";
  value: RemoveAxelarManagedCellarIDsProposalWithDepositAmino;
}
/** RemoveAxelarManagedCellarIDsProposalWithDeposit is a specific definition for CLI commands */
export interface RemoveAxelarManagedCellarIDsProposalWithDepositSDKType {
  title: string;
  description: string;
  chain_id: bigint;
  cellar_ids: string[];
  deposit: string;
}
export interface AxelarScheduledCorkProposal {
  title: string;
  description: string;
  blockHeight: bigint;
  chainId: bigint;
  targetContractAddress: string;
  /**
   * The JSON representation of a ScheduleRequest defined in the Steward protos
   * 
   * Example: The following is the JSON form of a ScheduleRequest containing a steward.v2.cellar_v1.TrustPosition
   * message, which maps to the `trustPosition(address)` function of the the V1 Cellar contract.
   * 
   * {
   *   "cellar_id": "0x1234567890000000000000000000000000000000",
   *   "cellar_v1": {
   *     "trust_position": {
   *       "erc20_address": "0x1234567890000000000000000000000000000000"
   *     }
   *   },
   *   "block_height": 1000000
   * }
   * 
   * You can use the Steward CLI to generate the required JSON rather than constructing it by hand
   * https://github.com/peggyjv/steward
   */
  contractCallProtoJson: string;
  /**
   * unix timestamp before which the contract call must be executed.
   * enforced by the Axelar proxy contract
   */
  deadline: bigint;
}
export interface AxelarScheduledCorkProposalProtoMsg {
  typeUrl: "/axelarcork.v1.AxelarScheduledCorkProposal";
  value: Uint8Array;
}
export interface AxelarScheduledCorkProposalAmino {
  title?: string;
  description?: string;
  block_height?: string;
  chain_id?: string;
  target_contract_address?: string;
  /**
   * The JSON representation of a ScheduleRequest defined in the Steward protos
   * 
   * Example: The following is the JSON form of a ScheduleRequest containing a steward.v2.cellar_v1.TrustPosition
   * message, which maps to the `trustPosition(address)` function of the the V1 Cellar contract.
   * 
   * {
   *   "cellar_id": "0x1234567890000000000000000000000000000000",
   *   "cellar_v1": {
   *     "trust_position": {
   *       "erc20_address": "0x1234567890000000000000000000000000000000"
   *     }
   *   },
   *   "block_height": 1000000
   * }
   * 
   * You can use the Steward CLI to generate the required JSON rather than constructing it by hand
   * https://github.com/peggyjv/steward
   */
  contract_call_proto_json?: string;
  /**
   * unix timestamp before which the contract call must be executed.
   * enforced by the Axelar proxy contract
   */
  deadline?: string;
}
export interface AxelarScheduledCorkProposalAminoMsg {
  type: "/axelarcork.v1.AxelarScheduledCorkProposal";
  value: AxelarScheduledCorkProposalAmino;
}
export interface AxelarScheduledCorkProposalSDKType {
  title: string;
  description: string;
  block_height: bigint;
  chain_id: bigint;
  target_contract_address: string;
  contract_call_proto_json: string;
  deadline: bigint;
}
/** AxelarScheduledCorkProposalWithDeposit is a specific definition for CLI commands */
export interface AxelarScheduledCorkProposalWithDeposit {
  title: string;
  description: string;
  blockHeight: bigint;
  chainId: bigint;
  targetContractAddress: string;
  contractCallProtoJson: string;
  deadline: bigint;
  deposit: string;
}
export interface AxelarScheduledCorkProposalWithDepositProtoMsg {
  typeUrl: "/axelarcork.v1.AxelarScheduledCorkProposalWithDeposit";
  value: Uint8Array;
}
/** AxelarScheduledCorkProposalWithDeposit is a specific definition for CLI commands */
export interface AxelarScheduledCorkProposalWithDepositAmino {
  title?: string;
  description?: string;
  block_height?: string;
  chain_id?: string;
  target_contract_address?: string;
  contract_call_proto_json?: string;
  deadline?: string;
  deposit?: string;
}
export interface AxelarScheduledCorkProposalWithDepositAminoMsg {
  type: "/axelarcork.v1.AxelarScheduledCorkProposalWithDeposit";
  value: AxelarScheduledCorkProposalWithDepositAmino;
}
/** AxelarScheduledCorkProposalWithDeposit is a specific definition for CLI commands */
export interface AxelarScheduledCorkProposalWithDepositSDKType {
  title: string;
  description: string;
  block_height: bigint;
  chain_id: bigint;
  target_contract_address: string;
  contract_call_proto_json: string;
  deadline: bigint;
  deposit: string;
}
export interface AxelarCommunityPoolSpendProposal {
  title: string;
  description: string;
  recipient: string;
  chainId: bigint;
  amount: Coin;
}
export interface AxelarCommunityPoolSpendProposalProtoMsg {
  typeUrl: "/axelarcork.v1.AxelarCommunityPoolSpendProposal";
  value: Uint8Array;
}
export interface AxelarCommunityPoolSpendProposalAmino {
  title?: string;
  description?: string;
  recipient?: string;
  chain_id?: string;
  amount?: CoinAmino;
}
export interface AxelarCommunityPoolSpendProposalAminoMsg {
  type: "/axelarcork.v1.AxelarCommunityPoolSpendProposal";
  value: AxelarCommunityPoolSpendProposalAmino;
}
export interface AxelarCommunityPoolSpendProposalSDKType {
  title: string;
  description: string;
  recipient: string;
  chain_id: bigint;
  amount: CoinSDKType;
}
/**
 * This format of the Axelar community spend Ethereum proposal is specifically for
 * the CLI to allow simple text serialization.
 */
export interface AxelarCommunityPoolSpendProposalForCLI {
  title: string;
  description: string;
  recipient: string;
  chainId: bigint;
  amount: string;
  deposit: string;
}
export interface AxelarCommunityPoolSpendProposalForCLIProtoMsg {
  typeUrl: "/axelarcork.v1.AxelarCommunityPoolSpendProposalForCLI";
  value: Uint8Array;
}
/**
 * This format of the Axelar community spend Ethereum proposal is specifically for
 * the CLI to allow simple text serialization.
 */
export interface AxelarCommunityPoolSpendProposalForCLIAmino {
  title?: string;
  description?: string;
  recipient?: string;
  chain_id?: string;
  amount?: string;
  deposit?: string;
}
export interface AxelarCommunityPoolSpendProposalForCLIAminoMsg {
  type: "/axelarcork.v1.AxelarCommunityPoolSpendProposalForCLI";
  value: AxelarCommunityPoolSpendProposalForCLIAmino;
}
/**
 * This format of the Axelar community spend Ethereum proposal is specifically for
 * the CLI to allow simple text serialization.
 */
export interface AxelarCommunityPoolSpendProposalForCLISDKType {
  title: string;
  description: string;
  recipient: string;
  chain_id: bigint;
  amount: string;
  deposit: string;
}
export interface AddChainConfigurationProposal {
  title: string;
  description: string;
  chainConfiguration?: ChainConfiguration;
}
export interface AddChainConfigurationProposalProtoMsg {
  typeUrl: "/axelarcork.v1.AddChainConfigurationProposal";
  value: Uint8Array;
}
export interface AddChainConfigurationProposalAmino {
  title?: string;
  description?: string;
  chain_configuration?: ChainConfigurationAmino;
}
export interface AddChainConfigurationProposalAminoMsg {
  type: "/axelarcork.v1.AddChainConfigurationProposal";
  value: AddChainConfigurationProposalAmino;
}
export interface AddChainConfigurationProposalSDKType {
  title: string;
  description: string;
  chain_configuration?: ChainConfigurationSDKType;
}
export interface AddChainConfigurationProposalWithDeposit {
  title: string;
  description: string;
  chainConfiguration?: ChainConfiguration;
  deposit: string;
}
export interface AddChainConfigurationProposalWithDepositProtoMsg {
  typeUrl: "/axelarcork.v1.AddChainConfigurationProposalWithDeposit";
  value: Uint8Array;
}
export interface AddChainConfigurationProposalWithDepositAmino {
  title?: string;
  description?: string;
  chain_configuration?: ChainConfigurationAmino;
  deposit?: string;
}
export interface AddChainConfigurationProposalWithDepositAminoMsg {
  type: "/axelarcork.v1.AddChainConfigurationProposalWithDeposit";
  value: AddChainConfigurationProposalWithDepositAmino;
}
export interface AddChainConfigurationProposalWithDepositSDKType {
  title: string;
  description: string;
  chain_configuration?: ChainConfigurationSDKType;
  deposit: string;
}
export interface RemoveChainConfigurationProposal {
  title: string;
  description: string;
  chainId: bigint;
}
export interface RemoveChainConfigurationProposalProtoMsg {
  typeUrl: "/axelarcork.v1.RemoveChainConfigurationProposal";
  value: Uint8Array;
}
export interface RemoveChainConfigurationProposalAmino {
  title?: string;
  description?: string;
  chain_id?: string;
}
export interface RemoveChainConfigurationProposalAminoMsg {
  type: "/axelarcork.v1.RemoveChainConfigurationProposal";
  value: RemoveChainConfigurationProposalAmino;
}
export interface RemoveChainConfigurationProposalSDKType {
  title: string;
  description: string;
  chain_id: bigint;
}
export interface RemoveChainConfigurationProposalWithDeposit {
  title: string;
  description: string;
  chainId: bigint;
  deposit: string;
}
export interface RemoveChainConfigurationProposalWithDepositProtoMsg {
  typeUrl: "/axelarcork.v1.RemoveChainConfigurationProposalWithDeposit";
  value: Uint8Array;
}
export interface RemoveChainConfigurationProposalWithDepositAmino {
  title?: string;
  description?: string;
  chain_id?: string;
  deposit?: string;
}
export interface RemoveChainConfigurationProposalWithDepositAminoMsg {
  type: "/axelarcork.v1.RemoveChainConfigurationProposalWithDeposit";
  value: RemoveChainConfigurationProposalWithDepositAmino;
}
export interface RemoveChainConfigurationProposalWithDepositSDKType {
  title: string;
  description: string;
  chain_id: bigint;
  deposit: string;
}
export interface UpgradeAxelarProxyContractProposal {
  title: string;
  description: string;
  chainId: bigint;
  newProxyAddress: string;
}
export interface UpgradeAxelarProxyContractProposalProtoMsg {
  typeUrl: "/axelarcork.v1.UpgradeAxelarProxyContractProposal";
  value: Uint8Array;
}
export interface UpgradeAxelarProxyContractProposalAmino {
  title?: string;
  description?: string;
  chain_id?: string;
  new_proxy_address?: string;
}
export interface UpgradeAxelarProxyContractProposalAminoMsg {
  type: "/axelarcork.v1.UpgradeAxelarProxyContractProposal";
  value: UpgradeAxelarProxyContractProposalAmino;
}
export interface UpgradeAxelarProxyContractProposalSDKType {
  title: string;
  description: string;
  chain_id: bigint;
  new_proxy_address: string;
}
export interface UpgradeAxelarProxyContractProposalWithDeposit {
  title: string;
  description: string;
  chainId: bigint;
  newProxyAddress: string;
  deposit: string;
}
export interface UpgradeAxelarProxyContractProposalWithDepositProtoMsg {
  typeUrl: "/axelarcork.v1.UpgradeAxelarProxyContractProposalWithDeposit";
  value: Uint8Array;
}
export interface UpgradeAxelarProxyContractProposalWithDepositAmino {
  title?: string;
  description?: string;
  chain_id?: string;
  new_proxy_address?: string;
  deposit?: string;
}
export interface UpgradeAxelarProxyContractProposalWithDepositAminoMsg {
  type: "/axelarcork.v1.UpgradeAxelarProxyContractProposalWithDeposit";
  value: UpgradeAxelarProxyContractProposalWithDepositAmino;
}
export interface UpgradeAxelarProxyContractProposalWithDepositSDKType {
  title: string;
  description: string;
  chain_id: bigint;
  new_proxy_address: string;
  deposit: string;
}
export interface CancelAxelarProxyContractUpgradeProposal {
  title: string;
  description: string;
  chainId: bigint;
}
export interface CancelAxelarProxyContractUpgradeProposalProtoMsg {
  typeUrl: "/axelarcork.v1.CancelAxelarProxyContractUpgradeProposal";
  value: Uint8Array;
}
export interface CancelAxelarProxyContractUpgradeProposalAmino {
  title?: string;
  description?: string;
  chain_id?: string;
}
export interface CancelAxelarProxyContractUpgradeProposalAminoMsg {
  type: "/axelarcork.v1.CancelAxelarProxyContractUpgradeProposal";
  value: CancelAxelarProxyContractUpgradeProposalAmino;
}
export interface CancelAxelarProxyContractUpgradeProposalSDKType {
  title: string;
  description: string;
  chain_id: bigint;
}
export interface CancelAxelarProxyContractUpgradeProposalWithDeposit {
  title: string;
  description: string;
  chainId: bigint;
  deposit: string;
}
export interface CancelAxelarProxyContractUpgradeProposalWithDepositProtoMsg {
  typeUrl: "/axelarcork.v1.CancelAxelarProxyContractUpgradeProposalWithDeposit";
  value: Uint8Array;
}
export interface CancelAxelarProxyContractUpgradeProposalWithDepositAmino {
  title?: string;
  description?: string;
  chain_id?: string;
  deposit?: string;
}
export interface CancelAxelarProxyContractUpgradeProposalWithDepositAminoMsg {
  type: "/axelarcork.v1.CancelAxelarProxyContractUpgradeProposalWithDeposit";
  value: CancelAxelarProxyContractUpgradeProposalWithDepositAmino;
}
export interface CancelAxelarProxyContractUpgradeProposalWithDepositSDKType {
  title: string;
  description: string;
  chain_id: bigint;
  deposit: string;
}
function createBaseAddAxelarManagedCellarIDsProposal(): AddAxelarManagedCellarIDsProposal {
  return {
    title: "",
    description: "",
    chainId: BigInt(0),
    cellarIds: undefined,
    publisherDomain: ""
  };
}
export const AddAxelarManagedCellarIDsProposal = {
  typeUrl: "/axelarcork.v1.AddAxelarManagedCellarIDsProposal",
  encode(message: AddAxelarManagedCellarIDsProposal, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.title !== "") {
      writer.uint32(10).string(message.title);
    }
    if (message.description !== "") {
      writer.uint32(18).string(message.description);
    }
    if (message.chainId !== BigInt(0)) {
      writer.uint32(24).uint64(message.chainId);
    }
    if (message.cellarIds !== undefined) {
      CellarIDSet.encode(message.cellarIds, writer.uint32(34).fork()).ldelim();
    }
    if (message.publisherDomain !== "") {
      writer.uint32(42).string(message.publisherDomain);
    }
    return writer;
  },
  fromJSON(object: any): AddAxelarManagedCellarIDsProposal {
    return {
      title: isSet(object.title) ? String(object.title) : "",
      description: isSet(object.description) ? String(object.description) : "",
      chainId: isSet(object.chainId) ? BigInt(object.chainId.toString()) : BigInt(0),
      cellarIds: isSet(object.cellarIds) ? CellarIDSet.fromJSON(object.cellarIds) : undefined,
      publisherDomain: isSet(object.publisherDomain) ? String(object.publisherDomain) : ""
    };
  },
  fromPartial(object: Partial<AddAxelarManagedCellarIDsProposal>): AddAxelarManagedCellarIDsProposal {
    const message = createBaseAddAxelarManagedCellarIDsProposal();
    message.title = object.title ?? "";
    message.description = object.description ?? "";
    message.chainId = object.chainId !== undefined && object.chainId !== null ? BigInt(object.chainId.toString()) : BigInt(0);
    message.cellarIds = object.cellarIds !== undefined && object.cellarIds !== null ? CellarIDSet.fromPartial(object.cellarIds) : undefined;
    message.publisherDomain = object.publisherDomain ?? "";
    return message;
  },
  fromAmino(object: AddAxelarManagedCellarIDsProposalAmino): AddAxelarManagedCellarIDsProposal {
    const message = createBaseAddAxelarManagedCellarIDsProposal();
    if (object.title !== undefined && object.title !== null) {
      message.title = object.title;
    }
    if (object.description !== undefined && object.description !== null) {
      message.description = object.description;
    }
    if (object.chain_id !== undefined && object.chain_id !== null) {
      message.chainId = BigInt(object.chain_id);
    }
    if (object.cellar_ids !== undefined && object.cellar_ids !== null) {
      message.cellarIds = CellarIDSet.fromAmino(object.cellar_ids);
    }
    if (object.publisher_domain !== undefined && object.publisher_domain !== null) {
      message.publisherDomain = object.publisher_domain;
    }
    return message;
  },
  toAmino(message: AddAxelarManagedCellarIDsProposal): AddAxelarManagedCellarIDsProposalAmino {
    const obj: any = {};
    obj.title = message.title;
    obj.description = message.description;
    obj.chain_id = message.chainId ? message.chainId.toString() : undefined;
    obj.cellar_ids = message.cellarIds ? CellarIDSet.toAmino(message.cellarIds) : undefined;
    obj.publisher_domain = message.publisherDomain;
    return obj;
  },
  fromAminoMsg(object: AddAxelarManagedCellarIDsProposalAminoMsg): AddAxelarManagedCellarIDsProposal {
    return AddAxelarManagedCellarIDsProposal.fromAmino(object.value);
  },
  fromProtoMsg(message: AddAxelarManagedCellarIDsProposalProtoMsg): AddAxelarManagedCellarIDsProposal {
    return AddAxelarManagedCellarIDsProposal.decode(message.value);
  },
  toProto(message: AddAxelarManagedCellarIDsProposal): Uint8Array {
    return AddAxelarManagedCellarIDsProposal.encode(message).finish();
  },
  toProtoMsg(message: AddAxelarManagedCellarIDsProposal): AddAxelarManagedCellarIDsProposalProtoMsg {
    return {
      typeUrl: "/axelarcork.v1.AddAxelarManagedCellarIDsProposal",
      value: AddAxelarManagedCellarIDsProposal.encode(message).finish()
    };
  }
};
function createBaseAddAxelarManagedCellarIDsProposalWithDeposit(): AddAxelarManagedCellarIDsProposalWithDeposit {
  return {
    title: "",
    description: "",
    chainId: BigInt(0),
    cellarIds: [],
    publisherDomain: "",
    deposit: ""
  };
}
export const AddAxelarManagedCellarIDsProposalWithDeposit = {
  typeUrl: "/axelarcork.v1.AddAxelarManagedCellarIDsProposalWithDeposit",
  encode(message: AddAxelarManagedCellarIDsProposalWithDeposit, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.title !== "") {
      writer.uint32(10).string(message.title);
    }
    if (message.description !== "") {
      writer.uint32(18).string(message.description);
    }
    if (message.chainId !== BigInt(0)) {
      writer.uint32(24).uint64(message.chainId);
    }
    for (const v of message.cellarIds) {
      writer.uint32(34).string(v!);
    }
    if (message.publisherDomain !== "") {
      writer.uint32(42).string(message.publisherDomain);
    }
    if (message.deposit !== "") {
      writer.uint32(50).string(message.deposit);
    }
    return writer;
  },
  fromJSON(object: any): AddAxelarManagedCellarIDsProposalWithDeposit {
    return {
      title: isSet(object.title) ? String(object.title) : "",
      description: isSet(object.description) ? String(object.description) : "",
      chainId: isSet(object.chainId) ? BigInt(object.chainId.toString()) : BigInt(0),
      cellarIds: Array.isArray(object?.cellarIds) ? object.cellarIds.map((e: any) => String(e)) : [],
      publisherDomain: isSet(object.publisherDomain) ? String(object.publisherDomain) : "",
      deposit: isSet(object.deposit) ? String(object.deposit) : ""
    };
  },
  fromPartial(object: Partial<AddAxelarManagedCellarIDsProposalWithDeposit>): AddAxelarManagedCellarIDsProposalWithDeposit {
    const message = createBaseAddAxelarManagedCellarIDsProposalWithDeposit();
    message.title = object.title ?? "";
    message.description = object.description ?? "";
    message.chainId = object.chainId !== undefined && object.chainId !== null ? BigInt(object.chainId.toString()) : BigInt(0);
    message.cellarIds = object.cellarIds?.map(e => e) || [];
    message.publisherDomain = object.publisherDomain ?? "";
    message.deposit = object.deposit ?? "";
    return message;
  },
  fromAmino(object: AddAxelarManagedCellarIDsProposalWithDepositAmino): AddAxelarManagedCellarIDsProposalWithDeposit {
    const message = createBaseAddAxelarManagedCellarIDsProposalWithDeposit();
    if (object.title !== undefined && object.title !== null) {
      message.title = object.title;
    }
    if (object.description !== undefined && object.description !== null) {
      message.description = object.description;
    }
    if (object.chain_id !== undefined && object.chain_id !== null) {
      message.chainId = BigInt(object.chain_id);
    }
    message.cellarIds = object.cellar_ids?.map(e => e) || [];
    if (object.publisher_domain !== undefined && object.publisher_domain !== null) {
      message.publisherDomain = object.publisher_domain;
    }
    if (object.deposit !== undefined && object.deposit !== null) {
      message.deposit = object.deposit;
    }
    return message;
  },
  toAmino(message: AddAxelarManagedCellarIDsProposalWithDeposit): AddAxelarManagedCellarIDsProposalWithDepositAmino {
    const obj: any = {};
    obj.title = message.title;
    obj.description = message.description;
    obj.chain_id = message.chainId ? message.chainId.toString() : undefined;
    if (message.cellarIds) {
      obj.cellar_ids = message.cellarIds.map(e => e);
    } else {
      obj.cellar_ids = [];
    }
    obj.publisher_domain = message.publisherDomain;
    obj.deposit = message.deposit;
    return obj;
  },
  fromAminoMsg(object: AddAxelarManagedCellarIDsProposalWithDepositAminoMsg): AddAxelarManagedCellarIDsProposalWithDeposit {
    return AddAxelarManagedCellarIDsProposalWithDeposit.fromAmino(object.value);
  },
  fromProtoMsg(message: AddAxelarManagedCellarIDsProposalWithDepositProtoMsg): AddAxelarManagedCellarIDsProposalWithDeposit {
    return AddAxelarManagedCellarIDsProposalWithDeposit.decode(message.value);
  },
  toProto(message: AddAxelarManagedCellarIDsProposalWithDeposit): Uint8Array {
    return AddAxelarManagedCellarIDsProposalWithDeposit.encode(message).finish();
  },
  toProtoMsg(message: AddAxelarManagedCellarIDsProposalWithDeposit): AddAxelarManagedCellarIDsProposalWithDepositProtoMsg {
    return {
      typeUrl: "/axelarcork.v1.AddAxelarManagedCellarIDsProposalWithDeposit",
      value: AddAxelarManagedCellarIDsProposalWithDeposit.encode(message).finish()
    };
  }
};
function createBaseRemoveAxelarManagedCellarIDsProposal(): RemoveAxelarManagedCellarIDsProposal {
  return {
    title: "",
    description: "",
    chainId: BigInt(0),
    cellarIds: undefined
  };
}
export const RemoveAxelarManagedCellarIDsProposal = {
  typeUrl: "/axelarcork.v1.RemoveAxelarManagedCellarIDsProposal",
  encode(message: RemoveAxelarManagedCellarIDsProposal, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.title !== "") {
      writer.uint32(10).string(message.title);
    }
    if (message.description !== "") {
      writer.uint32(18).string(message.description);
    }
    if (message.chainId !== BigInt(0)) {
      writer.uint32(24).uint64(message.chainId);
    }
    if (message.cellarIds !== undefined) {
      CellarIDSet.encode(message.cellarIds, writer.uint32(34).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): RemoveAxelarManagedCellarIDsProposal {
    return {
      title: isSet(object.title) ? String(object.title) : "",
      description: isSet(object.description) ? String(object.description) : "",
      chainId: isSet(object.chainId) ? BigInt(object.chainId.toString()) : BigInt(0),
      cellarIds: isSet(object.cellarIds) ? CellarIDSet.fromJSON(object.cellarIds) : undefined
    };
  },
  fromPartial(object: Partial<RemoveAxelarManagedCellarIDsProposal>): RemoveAxelarManagedCellarIDsProposal {
    const message = createBaseRemoveAxelarManagedCellarIDsProposal();
    message.title = object.title ?? "";
    message.description = object.description ?? "";
    message.chainId = object.chainId !== undefined && object.chainId !== null ? BigInt(object.chainId.toString()) : BigInt(0);
    message.cellarIds = object.cellarIds !== undefined && object.cellarIds !== null ? CellarIDSet.fromPartial(object.cellarIds) : undefined;
    return message;
  },
  fromAmino(object: RemoveAxelarManagedCellarIDsProposalAmino): RemoveAxelarManagedCellarIDsProposal {
    const message = createBaseRemoveAxelarManagedCellarIDsProposal();
    if (object.title !== undefined && object.title !== null) {
      message.title = object.title;
    }
    if (object.description !== undefined && object.description !== null) {
      message.description = object.description;
    }
    if (object.chain_id !== undefined && object.chain_id !== null) {
      message.chainId = BigInt(object.chain_id);
    }
    if (object.cellar_ids !== undefined && object.cellar_ids !== null) {
      message.cellarIds = CellarIDSet.fromAmino(object.cellar_ids);
    }
    return message;
  },
  toAmino(message: RemoveAxelarManagedCellarIDsProposal): RemoveAxelarManagedCellarIDsProposalAmino {
    const obj: any = {};
    obj.title = message.title;
    obj.description = message.description;
    obj.chain_id = message.chainId ? message.chainId.toString() : undefined;
    obj.cellar_ids = message.cellarIds ? CellarIDSet.toAmino(message.cellarIds) : undefined;
    return obj;
  },
  fromAminoMsg(object: RemoveAxelarManagedCellarIDsProposalAminoMsg): RemoveAxelarManagedCellarIDsProposal {
    return RemoveAxelarManagedCellarIDsProposal.fromAmino(object.value);
  },
  fromProtoMsg(message: RemoveAxelarManagedCellarIDsProposalProtoMsg): RemoveAxelarManagedCellarIDsProposal {
    return RemoveAxelarManagedCellarIDsProposal.decode(message.value);
  },
  toProto(message: RemoveAxelarManagedCellarIDsProposal): Uint8Array {
    return RemoveAxelarManagedCellarIDsProposal.encode(message).finish();
  },
  toProtoMsg(message: RemoveAxelarManagedCellarIDsProposal): RemoveAxelarManagedCellarIDsProposalProtoMsg {
    return {
      typeUrl: "/axelarcork.v1.RemoveAxelarManagedCellarIDsProposal",
      value: RemoveAxelarManagedCellarIDsProposal.encode(message).finish()
    };
  }
};
function createBaseRemoveAxelarManagedCellarIDsProposalWithDeposit(): RemoveAxelarManagedCellarIDsProposalWithDeposit {
  return {
    title: "",
    description: "",
    chainId: BigInt(0),
    cellarIds: [],
    deposit: ""
  };
}
export const RemoveAxelarManagedCellarIDsProposalWithDeposit = {
  typeUrl: "/axelarcork.v1.RemoveAxelarManagedCellarIDsProposalWithDeposit",
  encode(message: RemoveAxelarManagedCellarIDsProposalWithDeposit, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.title !== "") {
      writer.uint32(10).string(message.title);
    }
    if (message.description !== "") {
      writer.uint32(18).string(message.description);
    }
    if (message.chainId !== BigInt(0)) {
      writer.uint32(24).uint64(message.chainId);
    }
    for (const v of message.cellarIds) {
      writer.uint32(34).string(v!);
    }
    if (message.deposit !== "") {
      writer.uint32(42).string(message.deposit);
    }
    return writer;
  },
  fromJSON(object: any): RemoveAxelarManagedCellarIDsProposalWithDeposit {
    return {
      title: isSet(object.title) ? String(object.title) : "",
      description: isSet(object.description) ? String(object.description) : "",
      chainId: isSet(object.chainId) ? BigInt(object.chainId.toString()) : BigInt(0),
      cellarIds: Array.isArray(object?.cellarIds) ? object.cellarIds.map((e: any) => String(e)) : [],
      deposit: isSet(object.deposit) ? String(object.deposit) : ""
    };
  },
  fromPartial(object: Partial<RemoveAxelarManagedCellarIDsProposalWithDeposit>): RemoveAxelarManagedCellarIDsProposalWithDeposit {
    const message = createBaseRemoveAxelarManagedCellarIDsProposalWithDeposit();
    message.title = object.title ?? "";
    message.description = object.description ?? "";
    message.chainId = object.chainId !== undefined && object.chainId !== null ? BigInt(object.chainId.toString()) : BigInt(0);
    message.cellarIds = object.cellarIds?.map(e => e) || [];
    message.deposit = object.deposit ?? "";
    return message;
  },
  fromAmino(object: RemoveAxelarManagedCellarIDsProposalWithDepositAmino): RemoveAxelarManagedCellarIDsProposalWithDeposit {
    const message = createBaseRemoveAxelarManagedCellarIDsProposalWithDeposit();
    if (object.title !== undefined && object.title !== null) {
      message.title = object.title;
    }
    if (object.description !== undefined && object.description !== null) {
      message.description = object.description;
    }
    if (object.chain_id !== undefined && object.chain_id !== null) {
      message.chainId = BigInt(object.chain_id);
    }
    message.cellarIds = object.cellar_ids?.map(e => e) || [];
    if (object.deposit !== undefined && object.deposit !== null) {
      message.deposit = object.deposit;
    }
    return message;
  },
  toAmino(message: RemoveAxelarManagedCellarIDsProposalWithDeposit): RemoveAxelarManagedCellarIDsProposalWithDepositAmino {
    const obj: any = {};
    obj.title = message.title;
    obj.description = message.description;
    obj.chain_id = message.chainId ? message.chainId.toString() : undefined;
    if (message.cellarIds) {
      obj.cellar_ids = message.cellarIds.map(e => e);
    } else {
      obj.cellar_ids = [];
    }
    obj.deposit = message.deposit;
    return obj;
  },
  fromAminoMsg(object: RemoveAxelarManagedCellarIDsProposalWithDepositAminoMsg): RemoveAxelarManagedCellarIDsProposalWithDeposit {
    return RemoveAxelarManagedCellarIDsProposalWithDeposit.fromAmino(object.value);
  },
  fromProtoMsg(message: RemoveAxelarManagedCellarIDsProposalWithDepositProtoMsg): RemoveAxelarManagedCellarIDsProposalWithDeposit {
    return RemoveAxelarManagedCellarIDsProposalWithDeposit.decode(message.value);
  },
  toProto(message: RemoveAxelarManagedCellarIDsProposalWithDeposit): Uint8Array {
    return RemoveAxelarManagedCellarIDsProposalWithDeposit.encode(message).finish();
  },
  toProtoMsg(message: RemoveAxelarManagedCellarIDsProposalWithDeposit): RemoveAxelarManagedCellarIDsProposalWithDepositProtoMsg {
    return {
      typeUrl: "/axelarcork.v1.RemoveAxelarManagedCellarIDsProposalWithDeposit",
      value: RemoveAxelarManagedCellarIDsProposalWithDeposit.encode(message).finish()
    };
  }
};
function createBaseAxelarScheduledCorkProposal(): AxelarScheduledCorkProposal {
  return {
    title: "",
    description: "",
    blockHeight: BigInt(0),
    chainId: BigInt(0),
    targetContractAddress: "",
    contractCallProtoJson: "",
    deadline: BigInt(0)
  };
}
export const AxelarScheduledCorkProposal = {
  typeUrl: "/axelarcork.v1.AxelarScheduledCorkProposal",
  encode(message: AxelarScheduledCorkProposal, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.title !== "") {
      writer.uint32(10).string(message.title);
    }
    if (message.description !== "") {
      writer.uint32(18).string(message.description);
    }
    if (message.blockHeight !== BigInt(0)) {
      writer.uint32(24).uint64(message.blockHeight);
    }
    if (message.chainId !== BigInt(0)) {
      writer.uint32(32).uint64(message.chainId);
    }
    if (message.targetContractAddress !== "") {
      writer.uint32(42).string(message.targetContractAddress);
    }
    if (message.contractCallProtoJson !== "") {
      writer.uint32(50).string(message.contractCallProtoJson);
    }
    if (message.deadline !== BigInt(0)) {
      writer.uint32(56).uint64(message.deadline);
    }
    return writer;
  },
  fromJSON(object: any): AxelarScheduledCorkProposal {
    return {
      title: isSet(object.title) ? String(object.title) : "",
      description: isSet(object.description) ? String(object.description) : "",
      blockHeight: isSet(object.blockHeight) ? BigInt(object.blockHeight.toString()) : BigInt(0),
      chainId: isSet(object.chainId) ? BigInt(object.chainId.toString()) : BigInt(0),
      targetContractAddress: isSet(object.targetContractAddress) ? String(object.targetContractAddress) : "",
      contractCallProtoJson: isSet(object.contractCallProtoJson) ? String(object.contractCallProtoJson) : "",
      deadline: isSet(object.deadline) ? BigInt(object.deadline.toString()) : BigInt(0)
    };
  },
  fromPartial(object: Partial<AxelarScheduledCorkProposal>): AxelarScheduledCorkProposal {
    const message = createBaseAxelarScheduledCorkProposal();
    message.title = object.title ?? "";
    message.description = object.description ?? "";
    message.blockHeight = object.blockHeight !== undefined && object.blockHeight !== null ? BigInt(object.blockHeight.toString()) : BigInt(0);
    message.chainId = object.chainId !== undefined && object.chainId !== null ? BigInt(object.chainId.toString()) : BigInt(0);
    message.targetContractAddress = object.targetContractAddress ?? "";
    message.contractCallProtoJson = object.contractCallProtoJson ?? "";
    message.deadline = object.deadline !== undefined && object.deadline !== null ? BigInt(object.deadline.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object: AxelarScheduledCorkProposalAmino): AxelarScheduledCorkProposal {
    const message = createBaseAxelarScheduledCorkProposal();
    if (object.title !== undefined && object.title !== null) {
      message.title = object.title;
    }
    if (object.description !== undefined && object.description !== null) {
      message.description = object.description;
    }
    if (object.block_height !== undefined && object.block_height !== null) {
      message.blockHeight = BigInt(object.block_height);
    }
    if (object.chain_id !== undefined && object.chain_id !== null) {
      message.chainId = BigInt(object.chain_id);
    }
    if (object.target_contract_address !== undefined && object.target_contract_address !== null) {
      message.targetContractAddress = object.target_contract_address;
    }
    if (object.contract_call_proto_json !== undefined && object.contract_call_proto_json !== null) {
      message.contractCallProtoJson = object.contract_call_proto_json;
    }
    if (object.deadline !== undefined && object.deadline !== null) {
      message.deadline = BigInt(object.deadline);
    }
    return message;
  },
  toAmino(message: AxelarScheduledCorkProposal): AxelarScheduledCorkProposalAmino {
    const obj: any = {};
    obj.title = message.title;
    obj.description = message.description;
    obj.block_height = message.blockHeight ? message.blockHeight.toString() : undefined;
    obj.chain_id = message.chainId ? message.chainId.toString() : undefined;
    obj.target_contract_address = message.targetContractAddress;
    obj.contract_call_proto_json = message.contractCallProtoJson;
    obj.deadline = message.deadline ? message.deadline.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: AxelarScheduledCorkProposalAminoMsg): AxelarScheduledCorkProposal {
    return AxelarScheduledCorkProposal.fromAmino(object.value);
  },
  fromProtoMsg(message: AxelarScheduledCorkProposalProtoMsg): AxelarScheduledCorkProposal {
    return AxelarScheduledCorkProposal.decode(message.value);
  },
  toProto(message: AxelarScheduledCorkProposal): Uint8Array {
    return AxelarScheduledCorkProposal.encode(message).finish();
  },
  toProtoMsg(message: AxelarScheduledCorkProposal): AxelarScheduledCorkProposalProtoMsg {
    return {
      typeUrl: "/axelarcork.v1.AxelarScheduledCorkProposal",
      value: AxelarScheduledCorkProposal.encode(message).finish()
    };
  }
};
function createBaseAxelarScheduledCorkProposalWithDeposit(): AxelarScheduledCorkProposalWithDeposit {
  return {
    title: "",
    description: "",
    blockHeight: BigInt(0),
    chainId: BigInt(0),
    targetContractAddress: "",
    contractCallProtoJson: "",
    deadline: BigInt(0),
    deposit: ""
  };
}
export const AxelarScheduledCorkProposalWithDeposit = {
  typeUrl: "/axelarcork.v1.AxelarScheduledCorkProposalWithDeposit",
  encode(message: AxelarScheduledCorkProposalWithDeposit, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.title !== "") {
      writer.uint32(10).string(message.title);
    }
    if (message.description !== "") {
      writer.uint32(18).string(message.description);
    }
    if (message.blockHeight !== BigInt(0)) {
      writer.uint32(24).uint64(message.blockHeight);
    }
    if (message.chainId !== BigInt(0)) {
      writer.uint32(32).uint64(message.chainId);
    }
    if (message.targetContractAddress !== "") {
      writer.uint32(42).string(message.targetContractAddress);
    }
    if (message.contractCallProtoJson !== "") {
      writer.uint32(50).string(message.contractCallProtoJson);
    }
    if (message.deadline !== BigInt(0)) {
      writer.uint32(56).uint64(message.deadline);
    }
    if (message.deposit !== "") {
      writer.uint32(66).string(message.deposit);
    }
    return writer;
  },
  fromJSON(object: any): AxelarScheduledCorkProposalWithDeposit {
    return {
      title: isSet(object.title) ? String(object.title) : "",
      description: isSet(object.description) ? String(object.description) : "",
      blockHeight: isSet(object.blockHeight) ? BigInt(object.blockHeight.toString()) : BigInt(0),
      chainId: isSet(object.chainId) ? BigInt(object.chainId.toString()) : BigInt(0),
      targetContractAddress: isSet(object.targetContractAddress) ? String(object.targetContractAddress) : "",
      contractCallProtoJson: isSet(object.contractCallProtoJson) ? String(object.contractCallProtoJson) : "",
      deadline: isSet(object.deadline) ? BigInt(object.deadline.toString()) : BigInt(0),
      deposit: isSet(object.deposit) ? String(object.deposit) : ""
    };
  },
  fromPartial(object: Partial<AxelarScheduledCorkProposalWithDeposit>): AxelarScheduledCorkProposalWithDeposit {
    const message = createBaseAxelarScheduledCorkProposalWithDeposit();
    message.title = object.title ?? "";
    message.description = object.description ?? "";
    message.blockHeight = object.blockHeight !== undefined && object.blockHeight !== null ? BigInt(object.blockHeight.toString()) : BigInt(0);
    message.chainId = object.chainId !== undefined && object.chainId !== null ? BigInt(object.chainId.toString()) : BigInt(0);
    message.targetContractAddress = object.targetContractAddress ?? "";
    message.contractCallProtoJson = object.contractCallProtoJson ?? "";
    message.deadline = object.deadline !== undefined && object.deadline !== null ? BigInt(object.deadline.toString()) : BigInt(0);
    message.deposit = object.deposit ?? "";
    return message;
  },
  fromAmino(object: AxelarScheduledCorkProposalWithDepositAmino): AxelarScheduledCorkProposalWithDeposit {
    const message = createBaseAxelarScheduledCorkProposalWithDeposit();
    if (object.title !== undefined && object.title !== null) {
      message.title = object.title;
    }
    if (object.description !== undefined && object.description !== null) {
      message.description = object.description;
    }
    if (object.block_height !== undefined && object.block_height !== null) {
      message.blockHeight = BigInt(object.block_height);
    }
    if (object.chain_id !== undefined && object.chain_id !== null) {
      message.chainId = BigInt(object.chain_id);
    }
    if (object.target_contract_address !== undefined && object.target_contract_address !== null) {
      message.targetContractAddress = object.target_contract_address;
    }
    if (object.contract_call_proto_json !== undefined && object.contract_call_proto_json !== null) {
      message.contractCallProtoJson = object.contract_call_proto_json;
    }
    if (object.deadline !== undefined && object.deadline !== null) {
      message.deadline = BigInt(object.deadline);
    }
    if (object.deposit !== undefined && object.deposit !== null) {
      message.deposit = object.deposit;
    }
    return message;
  },
  toAmino(message: AxelarScheduledCorkProposalWithDeposit): AxelarScheduledCorkProposalWithDepositAmino {
    const obj: any = {};
    obj.title = message.title;
    obj.description = message.description;
    obj.block_height = message.blockHeight ? message.blockHeight.toString() : undefined;
    obj.chain_id = message.chainId ? message.chainId.toString() : undefined;
    obj.target_contract_address = message.targetContractAddress;
    obj.contract_call_proto_json = message.contractCallProtoJson;
    obj.deadline = message.deadline ? message.deadline.toString() : undefined;
    obj.deposit = message.deposit;
    return obj;
  },
  fromAminoMsg(object: AxelarScheduledCorkProposalWithDepositAminoMsg): AxelarScheduledCorkProposalWithDeposit {
    return AxelarScheduledCorkProposalWithDeposit.fromAmino(object.value);
  },
  fromProtoMsg(message: AxelarScheduledCorkProposalWithDepositProtoMsg): AxelarScheduledCorkProposalWithDeposit {
    return AxelarScheduledCorkProposalWithDeposit.decode(message.value);
  },
  toProto(message: AxelarScheduledCorkProposalWithDeposit): Uint8Array {
    return AxelarScheduledCorkProposalWithDeposit.encode(message).finish();
  },
  toProtoMsg(message: AxelarScheduledCorkProposalWithDeposit): AxelarScheduledCorkProposalWithDepositProtoMsg {
    return {
      typeUrl: "/axelarcork.v1.AxelarScheduledCorkProposalWithDeposit",
      value: AxelarScheduledCorkProposalWithDeposit.encode(message).finish()
    };
  }
};
function createBaseAxelarCommunityPoolSpendProposal(): AxelarCommunityPoolSpendProposal {
  return {
    title: "",
    description: "",
    recipient: "",
    chainId: BigInt(0),
    amount: Coin.fromPartial({})
  };
}
export const AxelarCommunityPoolSpendProposal = {
  typeUrl: "/axelarcork.v1.AxelarCommunityPoolSpendProposal",
  encode(message: AxelarCommunityPoolSpendProposal, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.title !== "") {
      writer.uint32(10).string(message.title);
    }
    if (message.description !== "") {
      writer.uint32(18).string(message.description);
    }
    if (message.recipient !== "") {
      writer.uint32(26).string(message.recipient);
    }
    if (message.chainId !== BigInt(0)) {
      writer.uint32(32).uint64(message.chainId);
    }
    if (message.amount !== undefined) {
      Coin.encode(message.amount, writer.uint32(42).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): AxelarCommunityPoolSpendProposal {
    return {
      title: isSet(object.title) ? String(object.title) : "",
      description: isSet(object.description) ? String(object.description) : "",
      recipient: isSet(object.recipient) ? String(object.recipient) : "",
      chainId: isSet(object.chainId) ? BigInt(object.chainId.toString()) : BigInt(0),
      amount: isSet(object.amount) ? Coin.fromJSON(object.amount) : undefined
    };
  },
  fromPartial(object: Partial<AxelarCommunityPoolSpendProposal>): AxelarCommunityPoolSpendProposal {
    const message = createBaseAxelarCommunityPoolSpendProposal();
    message.title = object.title ?? "";
    message.description = object.description ?? "";
    message.recipient = object.recipient ?? "";
    message.chainId = object.chainId !== undefined && object.chainId !== null ? BigInt(object.chainId.toString()) : BigInt(0);
    message.amount = object.amount !== undefined && object.amount !== null ? Coin.fromPartial(object.amount) : undefined;
    return message;
  },
  fromAmino(object: AxelarCommunityPoolSpendProposalAmino): AxelarCommunityPoolSpendProposal {
    const message = createBaseAxelarCommunityPoolSpendProposal();
    if (object.title !== undefined && object.title !== null) {
      message.title = object.title;
    }
    if (object.description !== undefined && object.description !== null) {
      message.description = object.description;
    }
    if (object.recipient !== undefined && object.recipient !== null) {
      message.recipient = object.recipient;
    }
    if (object.chain_id !== undefined && object.chain_id !== null) {
      message.chainId = BigInt(object.chain_id);
    }
    if (object.amount !== undefined && object.amount !== null) {
      message.amount = Coin.fromAmino(object.amount);
    }
    return message;
  },
  toAmino(message: AxelarCommunityPoolSpendProposal): AxelarCommunityPoolSpendProposalAmino {
    const obj: any = {};
    obj.title = message.title;
    obj.description = message.description;
    obj.recipient = message.recipient;
    obj.chain_id = message.chainId ? message.chainId.toString() : undefined;
    obj.amount = message.amount ? Coin.toAmino(message.amount) : undefined;
    return obj;
  },
  fromAminoMsg(object: AxelarCommunityPoolSpendProposalAminoMsg): AxelarCommunityPoolSpendProposal {
    return AxelarCommunityPoolSpendProposal.fromAmino(object.value);
  },
  fromProtoMsg(message: AxelarCommunityPoolSpendProposalProtoMsg): AxelarCommunityPoolSpendProposal {
    return AxelarCommunityPoolSpendProposal.decode(message.value);
  },
  toProto(message: AxelarCommunityPoolSpendProposal): Uint8Array {
    return AxelarCommunityPoolSpendProposal.encode(message).finish();
  },
  toProtoMsg(message: AxelarCommunityPoolSpendProposal): AxelarCommunityPoolSpendProposalProtoMsg {
    return {
      typeUrl: "/axelarcork.v1.AxelarCommunityPoolSpendProposal",
      value: AxelarCommunityPoolSpendProposal.encode(message).finish()
    };
  }
};
function createBaseAxelarCommunityPoolSpendProposalForCLI(): AxelarCommunityPoolSpendProposalForCLI {
  return {
    title: "",
    description: "",
    recipient: "",
    chainId: BigInt(0),
    amount: "",
    deposit: ""
  };
}
export const AxelarCommunityPoolSpendProposalForCLI = {
  typeUrl: "/axelarcork.v1.AxelarCommunityPoolSpendProposalForCLI",
  encode(message: AxelarCommunityPoolSpendProposalForCLI, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.title !== "") {
      writer.uint32(10).string(message.title);
    }
    if (message.description !== "") {
      writer.uint32(18).string(message.description);
    }
    if (message.recipient !== "") {
      writer.uint32(26).string(message.recipient);
    }
    if (message.chainId !== BigInt(0)) {
      writer.uint32(32).uint64(message.chainId);
    }
    if (message.amount !== "") {
      writer.uint32(42).string(message.amount);
    }
    if (message.deposit !== "") {
      writer.uint32(50).string(message.deposit);
    }
    return writer;
  },
  fromJSON(object: any): AxelarCommunityPoolSpendProposalForCLI {
    return {
      title: isSet(object.title) ? String(object.title) : "",
      description: isSet(object.description) ? String(object.description) : "",
      recipient: isSet(object.recipient) ? String(object.recipient) : "",
      chainId: isSet(object.chainId) ? BigInt(object.chainId.toString()) : BigInt(0),
      amount: isSet(object.amount) ? String(object.amount) : "",
      deposit: isSet(object.deposit) ? String(object.deposit) : ""
    };
  },
  fromPartial(object: Partial<AxelarCommunityPoolSpendProposalForCLI>): AxelarCommunityPoolSpendProposalForCLI {
    const message = createBaseAxelarCommunityPoolSpendProposalForCLI();
    message.title = object.title ?? "";
    message.description = object.description ?? "";
    message.recipient = object.recipient ?? "";
    message.chainId = object.chainId !== undefined && object.chainId !== null ? BigInt(object.chainId.toString()) : BigInt(0);
    message.amount = object.amount ?? "";
    message.deposit = object.deposit ?? "";
    return message;
  },
  fromAmino(object: AxelarCommunityPoolSpendProposalForCLIAmino): AxelarCommunityPoolSpendProposalForCLI {
    const message = createBaseAxelarCommunityPoolSpendProposalForCLI();
    if (object.title !== undefined && object.title !== null) {
      message.title = object.title;
    }
    if (object.description !== undefined && object.description !== null) {
      message.description = object.description;
    }
    if (object.recipient !== undefined && object.recipient !== null) {
      message.recipient = object.recipient;
    }
    if (object.chain_id !== undefined && object.chain_id !== null) {
      message.chainId = BigInt(object.chain_id);
    }
    if (object.amount !== undefined && object.amount !== null) {
      message.amount = object.amount;
    }
    if (object.deposit !== undefined && object.deposit !== null) {
      message.deposit = object.deposit;
    }
    return message;
  },
  toAmino(message: AxelarCommunityPoolSpendProposalForCLI): AxelarCommunityPoolSpendProposalForCLIAmino {
    const obj: any = {};
    obj.title = message.title;
    obj.description = message.description;
    obj.recipient = message.recipient;
    obj.chain_id = message.chainId ? message.chainId.toString() : undefined;
    obj.amount = message.amount;
    obj.deposit = message.deposit;
    return obj;
  },
  fromAminoMsg(object: AxelarCommunityPoolSpendProposalForCLIAminoMsg): AxelarCommunityPoolSpendProposalForCLI {
    return AxelarCommunityPoolSpendProposalForCLI.fromAmino(object.value);
  },
  fromProtoMsg(message: AxelarCommunityPoolSpendProposalForCLIProtoMsg): AxelarCommunityPoolSpendProposalForCLI {
    return AxelarCommunityPoolSpendProposalForCLI.decode(message.value);
  },
  toProto(message: AxelarCommunityPoolSpendProposalForCLI): Uint8Array {
    return AxelarCommunityPoolSpendProposalForCLI.encode(message).finish();
  },
  toProtoMsg(message: AxelarCommunityPoolSpendProposalForCLI): AxelarCommunityPoolSpendProposalForCLIProtoMsg {
    return {
      typeUrl: "/axelarcork.v1.AxelarCommunityPoolSpendProposalForCLI",
      value: AxelarCommunityPoolSpendProposalForCLI.encode(message).finish()
    };
  }
};
function createBaseAddChainConfigurationProposal(): AddChainConfigurationProposal {
  return {
    title: "",
    description: "",
    chainConfiguration: undefined
  };
}
export const AddChainConfigurationProposal = {
  typeUrl: "/axelarcork.v1.AddChainConfigurationProposal",
  encode(message: AddChainConfigurationProposal, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.title !== "") {
      writer.uint32(10).string(message.title);
    }
    if (message.description !== "") {
      writer.uint32(18).string(message.description);
    }
    if (message.chainConfiguration !== undefined) {
      ChainConfiguration.encode(message.chainConfiguration, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): AddChainConfigurationProposal {
    return {
      title: isSet(object.title) ? String(object.title) : "",
      description: isSet(object.description) ? String(object.description) : "",
      chainConfiguration: isSet(object.chainConfiguration) ? ChainConfiguration.fromJSON(object.chainConfiguration) : undefined
    };
  },
  fromPartial(object: Partial<AddChainConfigurationProposal>): AddChainConfigurationProposal {
    const message = createBaseAddChainConfigurationProposal();
    message.title = object.title ?? "";
    message.description = object.description ?? "";
    message.chainConfiguration = object.chainConfiguration !== undefined && object.chainConfiguration !== null ? ChainConfiguration.fromPartial(object.chainConfiguration) : undefined;
    return message;
  },
  fromAmino(object: AddChainConfigurationProposalAmino): AddChainConfigurationProposal {
    const message = createBaseAddChainConfigurationProposal();
    if (object.title !== undefined && object.title !== null) {
      message.title = object.title;
    }
    if (object.description !== undefined && object.description !== null) {
      message.description = object.description;
    }
    if (object.chain_configuration !== undefined && object.chain_configuration !== null) {
      message.chainConfiguration = ChainConfiguration.fromAmino(object.chain_configuration);
    }
    return message;
  },
  toAmino(message: AddChainConfigurationProposal): AddChainConfigurationProposalAmino {
    const obj: any = {};
    obj.title = message.title;
    obj.description = message.description;
    obj.chain_configuration = message.chainConfiguration ? ChainConfiguration.toAmino(message.chainConfiguration) : undefined;
    return obj;
  },
  fromAminoMsg(object: AddChainConfigurationProposalAminoMsg): AddChainConfigurationProposal {
    return AddChainConfigurationProposal.fromAmino(object.value);
  },
  fromProtoMsg(message: AddChainConfigurationProposalProtoMsg): AddChainConfigurationProposal {
    return AddChainConfigurationProposal.decode(message.value);
  },
  toProto(message: AddChainConfigurationProposal): Uint8Array {
    return AddChainConfigurationProposal.encode(message).finish();
  },
  toProtoMsg(message: AddChainConfigurationProposal): AddChainConfigurationProposalProtoMsg {
    return {
      typeUrl: "/axelarcork.v1.AddChainConfigurationProposal",
      value: AddChainConfigurationProposal.encode(message).finish()
    };
  }
};
function createBaseAddChainConfigurationProposalWithDeposit(): AddChainConfigurationProposalWithDeposit {
  return {
    title: "",
    description: "",
    chainConfiguration: undefined,
    deposit: ""
  };
}
export const AddChainConfigurationProposalWithDeposit = {
  typeUrl: "/axelarcork.v1.AddChainConfigurationProposalWithDeposit",
  encode(message: AddChainConfigurationProposalWithDeposit, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.title !== "") {
      writer.uint32(10).string(message.title);
    }
    if (message.description !== "") {
      writer.uint32(18).string(message.description);
    }
    if (message.chainConfiguration !== undefined) {
      ChainConfiguration.encode(message.chainConfiguration, writer.uint32(26).fork()).ldelim();
    }
    if (message.deposit !== "") {
      writer.uint32(34).string(message.deposit);
    }
    return writer;
  },
  fromJSON(object: any): AddChainConfigurationProposalWithDeposit {
    return {
      title: isSet(object.title) ? String(object.title) : "",
      description: isSet(object.description) ? String(object.description) : "",
      chainConfiguration: isSet(object.chainConfiguration) ? ChainConfiguration.fromJSON(object.chainConfiguration) : undefined,
      deposit: isSet(object.deposit) ? String(object.deposit) : ""
    };
  },
  fromPartial(object: Partial<AddChainConfigurationProposalWithDeposit>): AddChainConfigurationProposalWithDeposit {
    const message = createBaseAddChainConfigurationProposalWithDeposit();
    message.title = object.title ?? "";
    message.description = object.description ?? "";
    message.chainConfiguration = object.chainConfiguration !== undefined && object.chainConfiguration !== null ? ChainConfiguration.fromPartial(object.chainConfiguration) : undefined;
    message.deposit = object.deposit ?? "";
    return message;
  },
  fromAmino(object: AddChainConfigurationProposalWithDepositAmino): AddChainConfigurationProposalWithDeposit {
    const message = createBaseAddChainConfigurationProposalWithDeposit();
    if (object.title !== undefined && object.title !== null) {
      message.title = object.title;
    }
    if (object.description !== undefined && object.description !== null) {
      message.description = object.description;
    }
    if (object.chain_configuration !== undefined && object.chain_configuration !== null) {
      message.chainConfiguration = ChainConfiguration.fromAmino(object.chain_configuration);
    }
    if (object.deposit !== undefined && object.deposit !== null) {
      message.deposit = object.deposit;
    }
    return message;
  },
  toAmino(message: AddChainConfigurationProposalWithDeposit): AddChainConfigurationProposalWithDepositAmino {
    const obj: any = {};
    obj.title = message.title;
    obj.description = message.description;
    obj.chain_configuration = message.chainConfiguration ? ChainConfiguration.toAmino(message.chainConfiguration) : undefined;
    obj.deposit = message.deposit;
    return obj;
  },
  fromAminoMsg(object: AddChainConfigurationProposalWithDepositAminoMsg): AddChainConfigurationProposalWithDeposit {
    return AddChainConfigurationProposalWithDeposit.fromAmino(object.value);
  },
  fromProtoMsg(message: AddChainConfigurationProposalWithDepositProtoMsg): AddChainConfigurationProposalWithDeposit {
    return AddChainConfigurationProposalWithDeposit.decode(message.value);
  },
  toProto(message: AddChainConfigurationProposalWithDeposit): Uint8Array {
    return AddChainConfigurationProposalWithDeposit.encode(message).finish();
  },
  toProtoMsg(message: AddChainConfigurationProposalWithDeposit): AddChainConfigurationProposalWithDepositProtoMsg {
    return {
      typeUrl: "/axelarcork.v1.AddChainConfigurationProposalWithDeposit",
      value: AddChainConfigurationProposalWithDeposit.encode(message).finish()
    };
  }
};
function createBaseRemoveChainConfigurationProposal(): RemoveChainConfigurationProposal {
  return {
    title: "",
    description: "",
    chainId: BigInt(0)
  };
}
export const RemoveChainConfigurationProposal = {
  typeUrl: "/axelarcork.v1.RemoveChainConfigurationProposal",
  encode(message: RemoveChainConfigurationProposal, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.title !== "") {
      writer.uint32(10).string(message.title);
    }
    if (message.description !== "") {
      writer.uint32(18).string(message.description);
    }
    if (message.chainId !== BigInt(0)) {
      writer.uint32(24).uint64(message.chainId);
    }
    return writer;
  },
  fromJSON(object: any): RemoveChainConfigurationProposal {
    return {
      title: isSet(object.title) ? String(object.title) : "",
      description: isSet(object.description) ? String(object.description) : "",
      chainId: isSet(object.chainId) ? BigInt(object.chainId.toString()) : BigInt(0)
    };
  },
  fromPartial(object: Partial<RemoveChainConfigurationProposal>): RemoveChainConfigurationProposal {
    const message = createBaseRemoveChainConfigurationProposal();
    message.title = object.title ?? "";
    message.description = object.description ?? "";
    message.chainId = object.chainId !== undefined && object.chainId !== null ? BigInt(object.chainId.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object: RemoveChainConfigurationProposalAmino): RemoveChainConfigurationProposal {
    const message = createBaseRemoveChainConfigurationProposal();
    if (object.title !== undefined && object.title !== null) {
      message.title = object.title;
    }
    if (object.description !== undefined && object.description !== null) {
      message.description = object.description;
    }
    if (object.chain_id !== undefined && object.chain_id !== null) {
      message.chainId = BigInt(object.chain_id);
    }
    return message;
  },
  toAmino(message: RemoveChainConfigurationProposal): RemoveChainConfigurationProposalAmino {
    const obj: any = {};
    obj.title = message.title;
    obj.description = message.description;
    obj.chain_id = message.chainId ? message.chainId.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: RemoveChainConfigurationProposalAminoMsg): RemoveChainConfigurationProposal {
    return RemoveChainConfigurationProposal.fromAmino(object.value);
  },
  fromProtoMsg(message: RemoveChainConfigurationProposalProtoMsg): RemoveChainConfigurationProposal {
    return RemoveChainConfigurationProposal.decode(message.value);
  },
  toProto(message: RemoveChainConfigurationProposal): Uint8Array {
    return RemoveChainConfigurationProposal.encode(message).finish();
  },
  toProtoMsg(message: RemoveChainConfigurationProposal): RemoveChainConfigurationProposalProtoMsg {
    return {
      typeUrl: "/axelarcork.v1.RemoveChainConfigurationProposal",
      value: RemoveChainConfigurationProposal.encode(message).finish()
    };
  }
};
function createBaseRemoveChainConfigurationProposalWithDeposit(): RemoveChainConfigurationProposalWithDeposit {
  return {
    title: "",
    description: "",
    chainId: BigInt(0),
    deposit: ""
  };
}
export const RemoveChainConfigurationProposalWithDeposit = {
  typeUrl: "/axelarcork.v1.RemoveChainConfigurationProposalWithDeposit",
  encode(message: RemoveChainConfigurationProposalWithDeposit, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.title !== "") {
      writer.uint32(10).string(message.title);
    }
    if (message.description !== "") {
      writer.uint32(18).string(message.description);
    }
    if (message.chainId !== BigInt(0)) {
      writer.uint32(24).uint64(message.chainId);
    }
    if (message.deposit !== "") {
      writer.uint32(34).string(message.deposit);
    }
    return writer;
  },
  fromJSON(object: any): RemoveChainConfigurationProposalWithDeposit {
    return {
      title: isSet(object.title) ? String(object.title) : "",
      description: isSet(object.description) ? String(object.description) : "",
      chainId: isSet(object.chainId) ? BigInt(object.chainId.toString()) : BigInt(0),
      deposit: isSet(object.deposit) ? String(object.deposit) : ""
    };
  },
  fromPartial(object: Partial<RemoveChainConfigurationProposalWithDeposit>): RemoveChainConfigurationProposalWithDeposit {
    const message = createBaseRemoveChainConfigurationProposalWithDeposit();
    message.title = object.title ?? "";
    message.description = object.description ?? "";
    message.chainId = object.chainId !== undefined && object.chainId !== null ? BigInt(object.chainId.toString()) : BigInt(0);
    message.deposit = object.deposit ?? "";
    return message;
  },
  fromAmino(object: RemoveChainConfigurationProposalWithDepositAmino): RemoveChainConfigurationProposalWithDeposit {
    const message = createBaseRemoveChainConfigurationProposalWithDeposit();
    if (object.title !== undefined && object.title !== null) {
      message.title = object.title;
    }
    if (object.description !== undefined && object.description !== null) {
      message.description = object.description;
    }
    if (object.chain_id !== undefined && object.chain_id !== null) {
      message.chainId = BigInt(object.chain_id);
    }
    if (object.deposit !== undefined && object.deposit !== null) {
      message.deposit = object.deposit;
    }
    return message;
  },
  toAmino(message: RemoveChainConfigurationProposalWithDeposit): RemoveChainConfigurationProposalWithDepositAmino {
    const obj: any = {};
    obj.title = message.title;
    obj.description = message.description;
    obj.chain_id = message.chainId ? message.chainId.toString() : undefined;
    obj.deposit = message.deposit;
    return obj;
  },
  fromAminoMsg(object: RemoveChainConfigurationProposalWithDepositAminoMsg): RemoveChainConfigurationProposalWithDeposit {
    return RemoveChainConfigurationProposalWithDeposit.fromAmino(object.value);
  },
  fromProtoMsg(message: RemoveChainConfigurationProposalWithDepositProtoMsg): RemoveChainConfigurationProposalWithDeposit {
    return RemoveChainConfigurationProposalWithDeposit.decode(message.value);
  },
  toProto(message: RemoveChainConfigurationProposalWithDeposit): Uint8Array {
    return RemoveChainConfigurationProposalWithDeposit.encode(message).finish();
  },
  toProtoMsg(message: RemoveChainConfigurationProposalWithDeposit): RemoveChainConfigurationProposalWithDepositProtoMsg {
    return {
      typeUrl: "/axelarcork.v1.RemoveChainConfigurationProposalWithDeposit",
      value: RemoveChainConfigurationProposalWithDeposit.encode(message).finish()
    };
  }
};
function createBaseUpgradeAxelarProxyContractProposal(): UpgradeAxelarProxyContractProposal {
  return {
    title: "",
    description: "",
    chainId: BigInt(0),
    newProxyAddress: ""
  };
}
export const UpgradeAxelarProxyContractProposal = {
  typeUrl: "/axelarcork.v1.UpgradeAxelarProxyContractProposal",
  encode(message: UpgradeAxelarProxyContractProposal, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.title !== "") {
      writer.uint32(10).string(message.title);
    }
    if (message.description !== "") {
      writer.uint32(18).string(message.description);
    }
    if (message.chainId !== BigInt(0)) {
      writer.uint32(24).uint64(message.chainId);
    }
    if (message.newProxyAddress !== "") {
      writer.uint32(34).string(message.newProxyAddress);
    }
    return writer;
  },
  fromJSON(object: any): UpgradeAxelarProxyContractProposal {
    return {
      title: isSet(object.title) ? String(object.title) : "",
      description: isSet(object.description) ? String(object.description) : "",
      chainId: isSet(object.chainId) ? BigInt(object.chainId.toString()) : BigInt(0),
      newProxyAddress: isSet(object.newProxyAddress) ? String(object.newProxyAddress) : ""
    };
  },
  fromPartial(object: Partial<UpgradeAxelarProxyContractProposal>): UpgradeAxelarProxyContractProposal {
    const message = createBaseUpgradeAxelarProxyContractProposal();
    message.title = object.title ?? "";
    message.description = object.description ?? "";
    message.chainId = object.chainId !== undefined && object.chainId !== null ? BigInt(object.chainId.toString()) : BigInt(0);
    message.newProxyAddress = object.newProxyAddress ?? "";
    return message;
  },
  fromAmino(object: UpgradeAxelarProxyContractProposalAmino): UpgradeAxelarProxyContractProposal {
    const message = createBaseUpgradeAxelarProxyContractProposal();
    if (object.title !== undefined && object.title !== null) {
      message.title = object.title;
    }
    if (object.description !== undefined && object.description !== null) {
      message.description = object.description;
    }
    if (object.chain_id !== undefined && object.chain_id !== null) {
      message.chainId = BigInt(object.chain_id);
    }
    if (object.new_proxy_address !== undefined && object.new_proxy_address !== null) {
      message.newProxyAddress = object.new_proxy_address;
    }
    return message;
  },
  toAmino(message: UpgradeAxelarProxyContractProposal): UpgradeAxelarProxyContractProposalAmino {
    const obj: any = {};
    obj.title = message.title;
    obj.description = message.description;
    obj.chain_id = message.chainId ? message.chainId.toString() : undefined;
    obj.new_proxy_address = message.newProxyAddress;
    return obj;
  },
  fromAminoMsg(object: UpgradeAxelarProxyContractProposalAminoMsg): UpgradeAxelarProxyContractProposal {
    return UpgradeAxelarProxyContractProposal.fromAmino(object.value);
  },
  fromProtoMsg(message: UpgradeAxelarProxyContractProposalProtoMsg): UpgradeAxelarProxyContractProposal {
    return UpgradeAxelarProxyContractProposal.decode(message.value);
  },
  toProto(message: UpgradeAxelarProxyContractProposal): Uint8Array {
    return UpgradeAxelarProxyContractProposal.encode(message).finish();
  },
  toProtoMsg(message: UpgradeAxelarProxyContractProposal): UpgradeAxelarProxyContractProposalProtoMsg {
    return {
      typeUrl: "/axelarcork.v1.UpgradeAxelarProxyContractProposal",
      value: UpgradeAxelarProxyContractProposal.encode(message).finish()
    };
  }
};
function createBaseUpgradeAxelarProxyContractProposalWithDeposit(): UpgradeAxelarProxyContractProposalWithDeposit {
  return {
    title: "",
    description: "",
    chainId: BigInt(0),
    newProxyAddress: "",
    deposit: ""
  };
}
export const UpgradeAxelarProxyContractProposalWithDeposit = {
  typeUrl: "/axelarcork.v1.UpgradeAxelarProxyContractProposalWithDeposit",
  encode(message: UpgradeAxelarProxyContractProposalWithDeposit, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.title !== "") {
      writer.uint32(10).string(message.title);
    }
    if (message.description !== "") {
      writer.uint32(18).string(message.description);
    }
    if (message.chainId !== BigInt(0)) {
      writer.uint32(24).uint64(message.chainId);
    }
    if (message.newProxyAddress !== "") {
      writer.uint32(34).string(message.newProxyAddress);
    }
    if (message.deposit !== "") {
      writer.uint32(42).string(message.deposit);
    }
    return writer;
  },
  fromJSON(object: any): UpgradeAxelarProxyContractProposalWithDeposit {
    return {
      title: isSet(object.title) ? String(object.title) : "",
      description: isSet(object.description) ? String(object.description) : "",
      chainId: isSet(object.chainId) ? BigInt(object.chainId.toString()) : BigInt(0),
      newProxyAddress: isSet(object.newProxyAddress) ? String(object.newProxyAddress) : "",
      deposit: isSet(object.deposit) ? String(object.deposit) : ""
    };
  },
  fromPartial(object: Partial<UpgradeAxelarProxyContractProposalWithDeposit>): UpgradeAxelarProxyContractProposalWithDeposit {
    const message = createBaseUpgradeAxelarProxyContractProposalWithDeposit();
    message.title = object.title ?? "";
    message.description = object.description ?? "";
    message.chainId = object.chainId !== undefined && object.chainId !== null ? BigInt(object.chainId.toString()) : BigInt(0);
    message.newProxyAddress = object.newProxyAddress ?? "";
    message.deposit = object.deposit ?? "";
    return message;
  },
  fromAmino(object: UpgradeAxelarProxyContractProposalWithDepositAmino): UpgradeAxelarProxyContractProposalWithDeposit {
    const message = createBaseUpgradeAxelarProxyContractProposalWithDeposit();
    if (object.title !== undefined && object.title !== null) {
      message.title = object.title;
    }
    if (object.description !== undefined && object.description !== null) {
      message.description = object.description;
    }
    if (object.chain_id !== undefined && object.chain_id !== null) {
      message.chainId = BigInt(object.chain_id);
    }
    if (object.new_proxy_address !== undefined && object.new_proxy_address !== null) {
      message.newProxyAddress = object.new_proxy_address;
    }
    if (object.deposit !== undefined && object.deposit !== null) {
      message.deposit = object.deposit;
    }
    return message;
  },
  toAmino(message: UpgradeAxelarProxyContractProposalWithDeposit): UpgradeAxelarProxyContractProposalWithDepositAmino {
    const obj: any = {};
    obj.title = message.title;
    obj.description = message.description;
    obj.chain_id = message.chainId ? message.chainId.toString() : undefined;
    obj.new_proxy_address = message.newProxyAddress;
    obj.deposit = message.deposit;
    return obj;
  },
  fromAminoMsg(object: UpgradeAxelarProxyContractProposalWithDepositAminoMsg): UpgradeAxelarProxyContractProposalWithDeposit {
    return UpgradeAxelarProxyContractProposalWithDeposit.fromAmino(object.value);
  },
  fromProtoMsg(message: UpgradeAxelarProxyContractProposalWithDepositProtoMsg): UpgradeAxelarProxyContractProposalWithDeposit {
    return UpgradeAxelarProxyContractProposalWithDeposit.decode(message.value);
  },
  toProto(message: UpgradeAxelarProxyContractProposalWithDeposit): Uint8Array {
    return UpgradeAxelarProxyContractProposalWithDeposit.encode(message).finish();
  },
  toProtoMsg(message: UpgradeAxelarProxyContractProposalWithDeposit): UpgradeAxelarProxyContractProposalWithDepositProtoMsg {
    return {
      typeUrl: "/axelarcork.v1.UpgradeAxelarProxyContractProposalWithDeposit",
      value: UpgradeAxelarProxyContractProposalWithDeposit.encode(message).finish()
    };
  }
};
function createBaseCancelAxelarProxyContractUpgradeProposal(): CancelAxelarProxyContractUpgradeProposal {
  return {
    title: "",
    description: "",
    chainId: BigInt(0)
  };
}
export const CancelAxelarProxyContractUpgradeProposal = {
  typeUrl: "/axelarcork.v1.CancelAxelarProxyContractUpgradeProposal",
  encode(message: CancelAxelarProxyContractUpgradeProposal, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.title !== "") {
      writer.uint32(10).string(message.title);
    }
    if (message.description !== "") {
      writer.uint32(18).string(message.description);
    }
    if (message.chainId !== BigInt(0)) {
      writer.uint32(24).uint64(message.chainId);
    }
    return writer;
  },
  fromJSON(object: any): CancelAxelarProxyContractUpgradeProposal {
    return {
      title: isSet(object.title) ? String(object.title) : "",
      description: isSet(object.description) ? String(object.description) : "",
      chainId: isSet(object.chainId) ? BigInt(object.chainId.toString()) : BigInt(0)
    };
  },
  fromPartial(object: Partial<CancelAxelarProxyContractUpgradeProposal>): CancelAxelarProxyContractUpgradeProposal {
    const message = createBaseCancelAxelarProxyContractUpgradeProposal();
    message.title = object.title ?? "";
    message.description = object.description ?? "";
    message.chainId = object.chainId !== undefined && object.chainId !== null ? BigInt(object.chainId.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object: CancelAxelarProxyContractUpgradeProposalAmino): CancelAxelarProxyContractUpgradeProposal {
    const message = createBaseCancelAxelarProxyContractUpgradeProposal();
    if (object.title !== undefined && object.title !== null) {
      message.title = object.title;
    }
    if (object.description !== undefined && object.description !== null) {
      message.description = object.description;
    }
    if (object.chain_id !== undefined && object.chain_id !== null) {
      message.chainId = BigInt(object.chain_id);
    }
    return message;
  },
  toAmino(message: CancelAxelarProxyContractUpgradeProposal): CancelAxelarProxyContractUpgradeProposalAmino {
    const obj: any = {};
    obj.title = message.title;
    obj.description = message.description;
    obj.chain_id = message.chainId ? message.chainId.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: CancelAxelarProxyContractUpgradeProposalAminoMsg): CancelAxelarProxyContractUpgradeProposal {
    return CancelAxelarProxyContractUpgradeProposal.fromAmino(object.value);
  },
  fromProtoMsg(message: CancelAxelarProxyContractUpgradeProposalProtoMsg): CancelAxelarProxyContractUpgradeProposal {
    return CancelAxelarProxyContractUpgradeProposal.decode(message.value);
  },
  toProto(message: CancelAxelarProxyContractUpgradeProposal): Uint8Array {
    return CancelAxelarProxyContractUpgradeProposal.encode(message).finish();
  },
  toProtoMsg(message: CancelAxelarProxyContractUpgradeProposal): CancelAxelarProxyContractUpgradeProposalProtoMsg {
    return {
      typeUrl: "/axelarcork.v1.CancelAxelarProxyContractUpgradeProposal",
      value: CancelAxelarProxyContractUpgradeProposal.encode(message).finish()
    };
  }
};
function createBaseCancelAxelarProxyContractUpgradeProposalWithDeposit(): CancelAxelarProxyContractUpgradeProposalWithDeposit {
  return {
    title: "",
    description: "",
    chainId: BigInt(0),
    deposit: ""
  };
}
export const CancelAxelarProxyContractUpgradeProposalWithDeposit = {
  typeUrl: "/axelarcork.v1.CancelAxelarProxyContractUpgradeProposalWithDeposit",
  encode(message: CancelAxelarProxyContractUpgradeProposalWithDeposit, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.title !== "") {
      writer.uint32(10).string(message.title);
    }
    if (message.description !== "") {
      writer.uint32(18).string(message.description);
    }
    if (message.chainId !== BigInt(0)) {
      writer.uint32(24).uint64(message.chainId);
    }
    if (message.deposit !== "") {
      writer.uint32(34).string(message.deposit);
    }
    return writer;
  },
  fromJSON(object: any): CancelAxelarProxyContractUpgradeProposalWithDeposit {
    return {
      title: isSet(object.title) ? String(object.title) : "",
      description: isSet(object.description) ? String(object.description) : "",
      chainId: isSet(object.chainId) ? BigInt(object.chainId.toString()) : BigInt(0),
      deposit: isSet(object.deposit) ? String(object.deposit) : ""
    };
  },
  fromPartial(object: Partial<CancelAxelarProxyContractUpgradeProposalWithDeposit>): CancelAxelarProxyContractUpgradeProposalWithDeposit {
    const message = createBaseCancelAxelarProxyContractUpgradeProposalWithDeposit();
    message.title = object.title ?? "";
    message.description = object.description ?? "";
    message.chainId = object.chainId !== undefined && object.chainId !== null ? BigInt(object.chainId.toString()) : BigInt(0);
    message.deposit = object.deposit ?? "";
    return message;
  },
  fromAmino(object: CancelAxelarProxyContractUpgradeProposalWithDepositAmino): CancelAxelarProxyContractUpgradeProposalWithDeposit {
    const message = createBaseCancelAxelarProxyContractUpgradeProposalWithDeposit();
    if (object.title !== undefined && object.title !== null) {
      message.title = object.title;
    }
    if (object.description !== undefined && object.description !== null) {
      message.description = object.description;
    }
    if (object.chain_id !== undefined && object.chain_id !== null) {
      message.chainId = BigInt(object.chain_id);
    }
    if (object.deposit !== undefined && object.deposit !== null) {
      message.deposit = object.deposit;
    }
    return message;
  },
  toAmino(message: CancelAxelarProxyContractUpgradeProposalWithDeposit): CancelAxelarProxyContractUpgradeProposalWithDepositAmino {
    const obj: any = {};
    obj.title = message.title;
    obj.description = message.description;
    obj.chain_id = message.chainId ? message.chainId.toString() : undefined;
    obj.deposit = message.deposit;
    return obj;
  },
  fromAminoMsg(object: CancelAxelarProxyContractUpgradeProposalWithDepositAminoMsg): CancelAxelarProxyContractUpgradeProposalWithDeposit {
    return CancelAxelarProxyContractUpgradeProposalWithDeposit.fromAmino(object.value);
  },
  fromProtoMsg(message: CancelAxelarProxyContractUpgradeProposalWithDepositProtoMsg): CancelAxelarProxyContractUpgradeProposalWithDeposit {
    return CancelAxelarProxyContractUpgradeProposalWithDeposit.decode(message.value);
  },
  toProto(message: CancelAxelarProxyContractUpgradeProposalWithDeposit): Uint8Array {
    return CancelAxelarProxyContractUpgradeProposalWithDeposit.encode(message).finish();
  },
  toProtoMsg(message: CancelAxelarProxyContractUpgradeProposalWithDeposit): CancelAxelarProxyContractUpgradeProposalWithDepositProtoMsg {
    return {
      typeUrl: "/axelarcork.v1.CancelAxelarProxyContractUpgradeProposalWithDeposit",
      value: CancelAxelarProxyContractUpgradeProposalWithDeposit.encode(message).finish()
    };
  }
};