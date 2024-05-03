import { BinaryWriter } from "../../../binary";
import { isSet } from "../../../helpers";
/** Params represent the Quantum Gravity Bridge genesis and store parameters. */
export interface Params {
  dataCommitmentWindow: bigint;
}
export interface ParamsProtoMsg {
  typeUrl: "/celestia.qgb.v1.Params";
  value: Uint8Array;
}
/** Params represent the Quantum Gravity Bridge genesis and store parameters. */
export interface ParamsAmino {
  data_commitment_window?: string;
}
export interface ParamsAminoMsg {
  type: "/celestia.qgb.v1.Params";
  value: ParamsAmino;
}
/** Params represent the Quantum Gravity Bridge genesis and store parameters. */
export interface ParamsSDKType {
  data_commitment_window: bigint;
}
/**
 * GenesisState struct, containing all persistent data required by the QGB
 * module
 */
export interface GenesisState {
  /**
   * GenesisState struct, containing all persistent data required by the QGB
   * module
   */
  params?: Params;
}
export interface GenesisStateProtoMsg {
  typeUrl: "/celestia.qgb.v1.GenesisState";
  value: Uint8Array;
}
/**
 * GenesisState struct, containing all persistent data required by the QGB
 * module
 */
export interface GenesisStateAmino {
  /**
   * GenesisState struct, containing all persistent data required by the QGB
   * module
   */
  params?: ParamsAmino;
}
export interface GenesisStateAminoMsg {
  type: "/celestia.qgb.v1.GenesisState";
  value: GenesisStateAmino;
}
/**
 * GenesisState struct, containing all persistent data required by the QGB
 * module
 */
export interface GenesisStateSDKType {
  params?: ParamsSDKType;
}
function createBaseParams(): Params {
  return {
    dataCommitmentWindow: BigInt(0)
  };
}
export const Params = {
  typeUrl: "/celestia.qgb.v1.Params",
  encode(message: Params, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.dataCommitmentWindow !== BigInt(0)) {
      writer.uint32(8).uint64(message.dataCommitmentWindow);
    }
    return writer;
  },
  fromJSON(object: any): Params {
    return {
      dataCommitmentWindow: isSet(object.dataCommitmentWindow) ? BigInt(object.dataCommitmentWindow.toString()) : BigInt(0)
    };
  },
  fromPartial(object: Partial<Params>): Params {
    const message = createBaseParams();
    message.dataCommitmentWindow = object.dataCommitmentWindow !== undefined && object.dataCommitmentWindow !== null ? BigInt(object.dataCommitmentWindow.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object: ParamsAmino): Params {
    const message = createBaseParams();
    if (object.data_commitment_window !== undefined && object.data_commitment_window !== null) {
      message.dataCommitmentWindow = BigInt(object.data_commitment_window);
    }
    return message;
  },
  toAmino(message: Params): ParamsAmino {
    const obj: any = {};
    obj.data_commitment_window = message.dataCommitmentWindow !== BigInt(0) ? message.dataCommitmentWindow.toString() : undefined;
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
      typeUrl: "/celestia.qgb.v1.Params",
      value: Params.encode(message).finish()
    };
  }
};
function createBaseGenesisState(): GenesisState {
  return {
    params: undefined
  };
}
export const GenesisState = {
  typeUrl: "/celestia.qgb.v1.GenesisState",
  encode(message: GenesisState, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.params !== undefined) {
      Params.encode(message.params, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): GenesisState {
    return {
      params: isSet(object.params) ? Params.fromJSON(object.params) : undefined
    };
  },
  fromPartial(object: Partial<GenesisState>): GenesisState {
    const message = createBaseGenesisState();
    message.params = object.params !== undefined && object.params !== null ? Params.fromPartial(object.params) : undefined;
    return message;
  },
  fromAmino(object: GenesisStateAmino): GenesisState {
    const message = createBaseGenesisState();
    if (object.params !== undefined && object.params !== null) {
      message.params = Params.fromAmino(object.params);
    }
    return message;
  },
  toAmino(message: GenesisState): GenesisStateAmino {
    const obj: any = {};
    obj.params = message.params ? Params.toAmino(message.params) : undefined;
    return obj;
  },
  fromAminoMsg(object: GenesisStateAminoMsg): GenesisState {
    return GenesisState.fromAmino(object.value);
  },
  fromProtoMsg(message: GenesisStateProtoMsg): GenesisState {
    return GenesisState.decode(message.value);
  },
  toProto(message: GenesisState): Uint8Array {
    return GenesisState.encode(message).finish();
  },
  toProtoMsg(message: GenesisState): GenesisStateProtoMsg {
    return {
      typeUrl: "/celestia.qgb.v1.GenesisState",
      value: GenesisState.encode(message).finish()
    };
  }
};