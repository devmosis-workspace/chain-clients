import { Coin, CoinAmino, CoinSDKType } from "../../../cosmos/base/v1beta1/coin";
import { BinaryWriter } from "../../../binary";
import { isSet } from "../../../helpers";
/** Params represent the genesis parameters for the module */
export interface Params {
  /** IBC packet route timeout window */
  routeTimeoutWindow: bigint;
  transferLimit: bigint;
  endBlockerLimit: bigint;
  callContractsProposalMinDeposits: CallContractProposalMinDeposit[];
}
export interface ParamsProtoMsg {
  typeUrl: "/axelar.axelarnet.v1beta1.Params";
  value: Uint8Array;
}
/** Params represent the genesis parameters for the module */
export interface ParamsAmino {
  /** IBC packet route timeout window */
  route_timeout_window: string;
  transfer_limit: string;
  end_blocker_limit: string;
  call_contracts_proposal_min_deposits: CallContractProposalMinDepositAmino[];
}
export interface ParamsAminoMsg {
  type: "/axelar.axelarnet.v1beta1.Params";
  value: ParamsAmino;
}
/** Params represent the genesis parameters for the module */
export interface ParamsSDKType {
  route_timeout_window: bigint;
  transfer_limit: bigint;
  end_blocker_limit: bigint;
  call_contracts_proposal_min_deposits: CallContractProposalMinDepositSDKType[];
}
export interface CallContractProposalMinDeposit {
  chain: string;
  contractAddress: string;
  minDeposits: Coin[];
}
export interface CallContractProposalMinDepositProtoMsg {
  typeUrl: "/axelar.axelarnet.v1beta1.CallContractProposalMinDeposit";
  value: Uint8Array;
}
export interface CallContractProposalMinDepositAmino {
  chain: string;
  contract_address: string;
  min_deposits: CoinAmino[];
}
export interface CallContractProposalMinDepositAminoMsg {
  type: "/axelar.axelarnet.v1beta1.CallContractProposalMinDeposit";
  value: CallContractProposalMinDepositAmino;
}
export interface CallContractProposalMinDepositSDKType {
  chain: string;
  contract_address: string;
  min_deposits: CoinSDKType[];
}
function createBaseParams(): Params {
  return {
    routeTimeoutWindow: BigInt(0),
    transferLimit: BigInt(0),
    endBlockerLimit: BigInt(0),
    callContractsProposalMinDeposits: []
  };
}
export const Params = {
  typeUrl: "/axelar.axelarnet.v1beta1.Params",
  encode(message: Params, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.routeTimeoutWindow !== BigInt(0)) {
      writer.uint32(8).uint64(message.routeTimeoutWindow);
    }
    if (message.transferLimit !== BigInt(0)) {
      writer.uint32(24).uint64(message.transferLimit);
    }
    if (message.endBlockerLimit !== BigInt(0)) {
      writer.uint32(32).uint64(message.endBlockerLimit);
    }
    for (const v of message.callContractsProposalMinDeposits) {
      CallContractProposalMinDeposit.encode(v!, writer.uint32(42).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): Params {
    return {
      routeTimeoutWindow: isSet(object.routeTimeoutWindow) ? BigInt(object.routeTimeoutWindow.toString()) : BigInt(0),
      transferLimit: isSet(object.transferLimit) ? BigInt(object.transferLimit.toString()) : BigInt(0),
      endBlockerLimit: isSet(object.endBlockerLimit) ? BigInt(object.endBlockerLimit.toString()) : BigInt(0),
      callContractsProposalMinDeposits: Array.isArray(object?.callContractsProposalMinDeposits) ? object.callContractsProposalMinDeposits.map((e: any) => CallContractProposalMinDeposit.fromJSON(e)) : []
    };
  },
  fromPartial(object: Partial<Params>): Params {
    const message = createBaseParams();
    message.routeTimeoutWindow = object.routeTimeoutWindow !== undefined && object.routeTimeoutWindow !== null ? BigInt(object.routeTimeoutWindow.toString()) : BigInt(0);
    message.transferLimit = object.transferLimit !== undefined && object.transferLimit !== null ? BigInt(object.transferLimit.toString()) : BigInt(0);
    message.endBlockerLimit = object.endBlockerLimit !== undefined && object.endBlockerLimit !== null ? BigInt(object.endBlockerLimit.toString()) : BigInt(0);
    message.callContractsProposalMinDeposits = object.callContractsProposalMinDeposits?.map(e => CallContractProposalMinDeposit.fromPartial(e)) || [];
    return message;
  },
  fromAmino(object: ParamsAmino): Params {
    return {
      routeTimeoutWindow: BigInt(object.route_timeout_window),
      transferLimit: BigInt(object.transfer_limit),
      endBlockerLimit: BigInt(object.end_blocker_limit),
      callContractsProposalMinDeposits: Array.isArray(object?.call_contracts_proposal_min_deposits) ? object.call_contracts_proposal_min_deposits.map((e: any) => CallContractProposalMinDeposit.fromAmino(e)) : []
    };
  },
  toAmino(message: Params): ParamsAmino {
    const obj: any = {};
    obj.route_timeout_window = message.routeTimeoutWindow ? message.routeTimeoutWindow.toString() : undefined;
    obj.transfer_limit = message.transferLimit ? message.transferLimit.toString() : undefined;
    obj.end_blocker_limit = message.endBlockerLimit ? message.endBlockerLimit.toString() : undefined;
    if (message.callContractsProposalMinDeposits) {
      obj.call_contracts_proposal_min_deposits = message.callContractsProposalMinDeposits.map(e => e ? CallContractProposalMinDeposit.toAmino(e) : undefined);
    } else {
      obj.call_contracts_proposal_min_deposits = [];
    }
    return obj;
  },
  fromAminoMsg(object: ParamsAminoMsg): Params {
    return Params.fromAmino(object.value);
  },
  fromProtoMsg(message: ParamsProtoMsg): Params {
    return Params.decode(message.value);
  },
  toProto(message: Params): Uint8Array {
    return Params.encode(message).finish();
  },
  toProtoMsg(message: Params): ParamsProtoMsg {
    return {
      typeUrl: "/axelar.axelarnet.v1beta1.Params",
      value: Params.encode(message).finish()
    };
  }
};
function createBaseCallContractProposalMinDeposit(): CallContractProposalMinDeposit {
  return {
    chain: "",
    contractAddress: "",
    minDeposits: []
  };
}
export const CallContractProposalMinDeposit = {
  typeUrl: "/axelar.axelarnet.v1beta1.CallContractProposalMinDeposit",
  encode(message: CallContractProposalMinDeposit, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.chain !== "") {
      writer.uint32(10).string(message.chain);
    }
    if (message.contractAddress !== "") {
      writer.uint32(18).string(message.contractAddress);
    }
    for (const v of message.minDeposits) {
      Coin.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): CallContractProposalMinDeposit {
    return {
      chain: isSet(object.chain) ? String(object.chain) : "",
      contractAddress: isSet(object.contractAddress) ? String(object.contractAddress) : "",
      minDeposits: Array.isArray(object?.minDeposits) ? object.minDeposits.map((e: any) => Coin.fromJSON(e)) : []
    };
  },
  fromPartial(object: Partial<CallContractProposalMinDeposit>): CallContractProposalMinDeposit {
    const message = createBaseCallContractProposalMinDeposit();
    message.chain = object.chain ?? "";
    message.contractAddress = object.contractAddress ?? "";
    message.minDeposits = object.minDeposits?.map(e => Coin.fromPartial(e)) || [];
    return message;
  },
  fromAmino(object: CallContractProposalMinDepositAmino): CallContractProposalMinDeposit {
    return {
      chain: object.chain,
      contractAddress: object.contract_address,
      minDeposits: Array.isArray(object?.min_deposits) ? object.min_deposits.map((e: any) => Coin.fromAmino(e)) : []
    };
  },
  toAmino(message: CallContractProposalMinDeposit): CallContractProposalMinDepositAmino {
    const obj: any = {};
    obj.chain = message.chain;
    obj.contract_address = message.contractAddress;
    if (message.minDeposits) {
      obj.min_deposits = message.minDeposits.map(e => e ? Coin.toAmino(e) : undefined);
    } else {
      obj.min_deposits = [];
    }
    return obj;
  },
  fromAminoMsg(object: CallContractProposalMinDepositAminoMsg): CallContractProposalMinDeposit {
    return CallContractProposalMinDeposit.fromAmino(object.value);
  },
  fromProtoMsg(message: CallContractProposalMinDepositProtoMsg): CallContractProposalMinDeposit {
    return CallContractProposalMinDeposit.decode(message.value);
  },
  toProto(message: CallContractProposalMinDeposit): Uint8Array {
    return CallContractProposalMinDeposit.encode(message).finish();
  },
  toProtoMsg(message: CallContractProposalMinDeposit): CallContractProposalMinDepositProtoMsg {
    return {
      typeUrl: "/axelar.axelarnet.v1beta1.CallContractProposalMinDeposit",
      value: CallContractProposalMinDeposit.encode(message).finish()
    };
  }
};