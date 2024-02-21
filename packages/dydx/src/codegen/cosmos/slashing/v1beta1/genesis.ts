import { Params, ParamsSDKType, ValidatorSigningInfo, ValidatorSigningInfoSDKType } from "./slashing";
import { BinaryWriter } from "../../../binary";
import { isSet } from "../../../helpers";
/** GenesisState defines the slashing module's genesis state. */
export interface GenesisState {
  /** params defines all the parameters of the module. */
  params: Params;
  /**
   * signing_infos represents a map between validator addresses and their
   * signing infos.
   */
  signingInfos: SigningInfo[];
  /**
   * missed_blocks represents a map between validator addresses and their
   * missed blocks.
   */
  missedBlocks: ValidatorMissedBlocks[];
}
export interface GenesisStateProtoMsg {
  typeUrl: "/cosmos.slashing.v1beta1.GenesisState";
  value: Uint8Array;
}
/** GenesisState defines the slashing module's genesis state. */
export interface GenesisStateSDKType {
  params: ParamsSDKType;
  signing_infos: SigningInfoSDKType[];
  missed_blocks: ValidatorMissedBlocksSDKType[];
}
/** SigningInfo stores validator signing info of corresponding address. */
export interface SigningInfo {
  /** address is the validator address. */
  address: string;
  /** validator_signing_info represents the signing info of this validator. */
  validatorSigningInfo: ValidatorSigningInfo;
}
export interface SigningInfoProtoMsg {
  typeUrl: "/cosmos.slashing.v1beta1.SigningInfo";
  value: Uint8Array;
}
/** SigningInfo stores validator signing info of corresponding address. */
export interface SigningInfoSDKType {
  address: string;
  validator_signing_info: ValidatorSigningInfoSDKType;
}
/**
 * ValidatorMissedBlocks contains array of missed blocks of corresponding
 * address.
 */
export interface ValidatorMissedBlocks {
  /** address is the validator address. */
  address: string;
  /** missed_blocks is an array of missed blocks by the validator. */
  missedBlocks: MissedBlock[];
}
export interface ValidatorMissedBlocksProtoMsg {
  typeUrl: "/cosmos.slashing.v1beta1.ValidatorMissedBlocks";
  value: Uint8Array;
}
/**
 * ValidatorMissedBlocks contains array of missed blocks of corresponding
 * address.
 */
export interface ValidatorMissedBlocksSDKType {
  address: string;
  missed_blocks: MissedBlockSDKType[];
}
/** MissedBlock contains height and missed status as boolean. */
export interface MissedBlock {
  /** index is the height at which the block was missed. */
  index: bigint;
  /** missed is the missed status. */
  missed: boolean;
}
export interface MissedBlockProtoMsg {
  typeUrl: "/cosmos.slashing.v1beta1.MissedBlock";
  value: Uint8Array;
}
/** MissedBlock contains height and missed status as boolean. */
export interface MissedBlockSDKType {
  index: bigint;
  missed: boolean;
}
function createBaseGenesisState(): GenesisState {
  return {
    params: Params.fromPartial({}),
    signingInfos: [],
    missedBlocks: []
  };
}
export const GenesisState = {
  typeUrl: "/cosmos.slashing.v1beta1.GenesisState",
  encode(message: GenesisState, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.params !== undefined) {
      Params.encode(message.params, writer.uint32(10).fork()).ldelim();
    }
    for (const v of message.signingInfos) {
      SigningInfo.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    for (const v of message.missedBlocks) {
      ValidatorMissedBlocks.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): GenesisState {
    return {
      params: isSet(object.params) ? Params.fromJSON(object.params) : undefined,
      signingInfos: Array.isArray(object?.signingInfos) ? object.signingInfos.map((e: any) => SigningInfo.fromJSON(e)) : [],
      missedBlocks: Array.isArray(object?.missedBlocks) ? object.missedBlocks.map((e: any) => ValidatorMissedBlocks.fromJSON(e)) : []
    };
  },
  fromPartial(object: Partial<GenesisState>): GenesisState {
    const message = createBaseGenesisState();
    message.params = object.params !== undefined && object.params !== null ? Params.fromPartial(object.params) : undefined;
    message.signingInfos = object.signingInfos?.map(e => SigningInfo.fromPartial(e)) || [];
    message.missedBlocks = object.missedBlocks?.map(e => ValidatorMissedBlocks.fromPartial(e)) || [];
    return message;
  },
  fromAmino(object: GenesisStateAmino): GenesisState {
    const message = createBaseGenesisState();
    if (object.params !== undefined && object.params !== null) {
      message.params = Params.fromAmino(object.params);
    }
    message.signingInfos = object.signing_infos?.map(e => SigningInfo.fromAmino(e)) || [];
    message.missedBlocks = object.missed_blocks?.map(e => ValidatorMissedBlocks.fromAmino(e)) || [];
    return message;
  },
  toAmino(message: GenesisState): GenesisStateAmino {
    const obj: any = {};
    obj.params = message.params ? Params.toAmino(message.params) : Params.fromPartial({});
    if (message.signingInfos) {
      obj.signing_infos = message.signingInfos.map(e => e ? SigningInfo.toAmino(e) : undefined);
    } else {
      obj.signing_infos = [];
    }
    if (message.missedBlocks) {
      obj.missed_blocks = message.missedBlocks.map(e => e ? ValidatorMissedBlocks.toAmino(e) : undefined);
    } else {
      obj.missed_blocks = [];
    }
    return obj;
  },
  fromAminoMsg(object: GenesisStateAminoMsg): GenesisState {
    return GenesisState.fromAmino(object.value);
  },
  toAminoMsg(message: GenesisState): GenesisStateAminoMsg {
    return {
      type: "cosmos-sdk/GenesisState",
      value: GenesisState.toAmino(message)
    };
  },
  fromProtoMsg(message: GenesisStateProtoMsg): GenesisState {
    return GenesisState.decode(message.value);
  },
  toProto(message: GenesisState): Uint8Array {
    return GenesisState.encode(message).finish();
  },
  toProtoMsg(message: GenesisState): GenesisStateProtoMsg {
    return {
      typeUrl: "/cosmos.slashing.v1beta1.GenesisState",
      value: GenesisState.encode(message).finish()
    };
  }
};
function createBaseSigningInfo(): SigningInfo {
  return {
    address: "",
    validatorSigningInfo: ValidatorSigningInfo.fromPartial({})
  };
}
export const SigningInfo = {
  typeUrl: "/cosmos.slashing.v1beta1.SigningInfo",
  encode(message: SigningInfo, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.address !== "") {
      writer.uint32(10).string(message.address);
    }
    if (message.validatorSigningInfo !== undefined) {
      ValidatorSigningInfo.encode(message.validatorSigningInfo, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): SigningInfo {
    return {
      address: isSet(object.address) ? String(object.address) : "",
      validatorSigningInfo: isSet(object.validatorSigningInfo) ? ValidatorSigningInfo.fromJSON(object.validatorSigningInfo) : undefined
    };
  },
  fromPartial(object: Partial<SigningInfo>): SigningInfo {
    const message = createBaseSigningInfo();
    message.address = object.address ?? "";
    message.validatorSigningInfo = object.validatorSigningInfo !== undefined && object.validatorSigningInfo !== null ? ValidatorSigningInfo.fromPartial(object.validatorSigningInfo) : undefined;
    return message;
  },
  fromAmino(object: SigningInfoAmino): SigningInfo {
    const message = createBaseSigningInfo();
    if (object.address !== undefined && object.address !== null) {
      message.address = object.address;
    }
    if (object.validator_signing_info !== undefined && object.validator_signing_info !== null) {
      message.validatorSigningInfo = ValidatorSigningInfo.fromAmino(object.validator_signing_info);
    }
    return message;
  },
  toAmino(message: SigningInfo): SigningInfoAmino {
    const obj: any = {};
    obj.address = message.address;
    obj.validator_signing_info = message.validatorSigningInfo ? ValidatorSigningInfo.toAmino(message.validatorSigningInfo) : ValidatorSigningInfo.fromPartial({});
    return obj;
  },
  fromAminoMsg(object: SigningInfoAminoMsg): SigningInfo {
    return SigningInfo.fromAmino(object.value);
  },
  toAminoMsg(message: SigningInfo): SigningInfoAminoMsg {
    return {
      type: "cosmos-sdk/SigningInfo",
      value: SigningInfo.toAmino(message)
    };
  },
  fromProtoMsg(message: SigningInfoProtoMsg): SigningInfo {
    return SigningInfo.decode(message.value);
  },
  toProto(message: SigningInfo): Uint8Array {
    return SigningInfo.encode(message).finish();
  },
  toProtoMsg(message: SigningInfo): SigningInfoProtoMsg {
    return {
      typeUrl: "/cosmos.slashing.v1beta1.SigningInfo",
      value: SigningInfo.encode(message).finish()
    };
  }
};
function createBaseValidatorMissedBlocks(): ValidatorMissedBlocks {
  return {
    address: "",
    missedBlocks: []
  };
}
export const ValidatorMissedBlocks = {
  typeUrl: "/cosmos.slashing.v1beta1.ValidatorMissedBlocks",
  encode(message: ValidatorMissedBlocks, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.address !== "") {
      writer.uint32(10).string(message.address);
    }
    for (const v of message.missedBlocks) {
      MissedBlock.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): ValidatorMissedBlocks {
    return {
      address: isSet(object.address) ? String(object.address) : "",
      missedBlocks: Array.isArray(object?.missedBlocks) ? object.missedBlocks.map((e: any) => MissedBlock.fromJSON(e)) : []
    };
  },
  fromPartial(object: Partial<ValidatorMissedBlocks>): ValidatorMissedBlocks {
    const message = createBaseValidatorMissedBlocks();
    message.address = object.address ?? "";
    message.missedBlocks = object.missedBlocks?.map(e => MissedBlock.fromPartial(e)) || [];
    return message;
  },
  fromAmino(object: ValidatorMissedBlocksAmino): ValidatorMissedBlocks {
    const message = createBaseValidatorMissedBlocks();
    if (object.address !== undefined && object.address !== null) {
      message.address = object.address;
    }
    message.missedBlocks = object.missed_blocks?.map(e => MissedBlock.fromAmino(e)) || [];
    return message;
  },
  toAmino(message: ValidatorMissedBlocks): ValidatorMissedBlocksAmino {
    const obj: any = {};
    obj.address = message.address;
    if (message.missedBlocks) {
      obj.missed_blocks = message.missedBlocks.map(e => e ? MissedBlock.toAmino(e) : undefined);
    } else {
      obj.missed_blocks = [];
    }
    return obj;
  },
  fromAminoMsg(object: ValidatorMissedBlocksAminoMsg): ValidatorMissedBlocks {
    return ValidatorMissedBlocks.fromAmino(object.value);
  },
  toAminoMsg(message: ValidatorMissedBlocks): ValidatorMissedBlocksAminoMsg {
    return {
      type: "cosmos-sdk/ValidatorMissedBlocks",
      value: ValidatorMissedBlocks.toAmino(message)
    };
  },
  fromProtoMsg(message: ValidatorMissedBlocksProtoMsg): ValidatorMissedBlocks {
    return ValidatorMissedBlocks.decode(message.value);
  },
  toProto(message: ValidatorMissedBlocks): Uint8Array {
    return ValidatorMissedBlocks.encode(message).finish();
  },
  toProtoMsg(message: ValidatorMissedBlocks): ValidatorMissedBlocksProtoMsg {
    return {
      typeUrl: "/cosmos.slashing.v1beta1.ValidatorMissedBlocks",
      value: ValidatorMissedBlocks.encode(message).finish()
    };
  }
};
function createBaseMissedBlock(): MissedBlock {
  return {
    index: BigInt(0),
    missed: false
  };
}
export const MissedBlock = {
  typeUrl: "/cosmos.slashing.v1beta1.MissedBlock",
  encode(message: MissedBlock, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.index !== BigInt(0)) {
      writer.uint32(8).int64(message.index);
    }
    if (message.missed === true) {
      writer.uint32(16).bool(message.missed);
    }
    return writer;
  },
  fromJSON(object: any): MissedBlock {
    return {
      index: isSet(object.index) ? BigInt(object.index.toString()) : BigInt(0),
      missed: isSet(object.missed) ? Boolean(object.missed) : false
    };
  },
  fromPartial(object: Partial<MissedBlock>): MissedBlock {
    const message = createBaseMissedBlock();
    message.index = object.index !== undefined && object.index !== null ? BigInt(object.index.toString()) : BigInt(0);
    message.missed = object.missed ?? false;
    return message;
  },
  fromAmino(object: MissedBlockAmino): MissedBlock {
    const message = createBaseMissedBlock();
    if (object.index !== undefined && object.index !== null) {
      message.index = BigInt(object.index);
    }
    if (object.missed !== undefined && object.missed !== null) {
      message.missed = object.missed;
    }
    return message;
  },
  toAmino(message: MissedBlock): MissedBlockAmino {
    const obj: any = {};
    obj.index = message.index ? message.index.toString() : undefined;
    obj.missed = message.missed;
    return obj;
  },
  fromAminoMsg(object: MissedBlockAminoMsg): MissedBlock {
    return MissedBlock.fromAmino(object.value);
  },
  toAminoMsg(message: MissedBlock): MissedBlockAminoMsg {
    return {
      type: "cosmos-sdk/MissedBlock",
      value: MissedBlock.toAmino(message)
    };
  },
  fromProtoMsg(message: MissedBlockProtoMsg): MissedBlock {
    return MissedBlock.decode(message.value);
  },
  toProto(message: MissedBlock): Uint8Array {
    return MissedBlock.encode(message).finish();
  },
  toProtoMsg(message: MissedBlock): MissedBlockProtoMsg {
    return {
      typeUrl: "/cosmos.slashing.v1beta1.MissedBlock",
      value: MissedBlock.encode(message).finish()
    };
  }
};