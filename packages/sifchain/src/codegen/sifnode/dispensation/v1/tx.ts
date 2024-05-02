import { DistributionType, distributionTypeFromJSON } from "./types";
import { BinaryWriter } from "../../../binary";
import { isSet } from "../../../helpers";
export interface MsgCreateDistribution {
  distributor: string;
  authorizedRunner: string;
  distributionType: DistributionType;
  output: string[];
}
export interface MsgCreateDistributionProtoMsg {
  typeUrl: "/sifnode.dispensation.v1.MsgCreateDistribution";
  value: Uint8Array;
}
export interface MsgCreateDistributionAmino {
  distributor?: string;
  authorized_runner?: string;
  distribution_type?: DistributionType;
  output?: string[];
}
export interface MsgCreateDistributionAminoMsg {
  type: "/sifnode.dispensation.v1.MsgCreateDistribution";
  value: MsgCreateDistributionAmino;
}
export interface MsgCreateDistributionSDKType {
  distributor: string;
  authorized_runner: string;
  distribution_type: DistributionType;
  output: string[];
}
export interface MsgCreateDistributionResponse {}
export interface MsgCreateDistributionResponseProtoMsg {
  typeUrl: "/sifnode.dispensation.v1.MsgCreateDistributionResponse";
  value: Uint8Array;
}
export interface MsgCreateDistributionResponseAmino {}
export interface MsgCreateDistributionResponseAminoMsg {
  type: "/sifnode.dispensation.v1.MsgCreateDistributionResponse";
  value: MsgCreateDistributionResponseAmino;
}
export interface MsgCreateDistributionResponseSDKType {}
export interface MsgCreateClaimResponse {}
export interface MsgCreateClaimResponseProtoMsg {
  typeUrl: "/sifnode.dispensation.v1.MsgCreateClaimResponse";
  value: Uint8Array;
}
export interface MsgCreateClaimResponseAmino {}
export interface MsgCreateClaimResponseAminoMsg {
  type: "/sifnode.dispensation.v1.MsgCreateClaimResponse";
  value: MsgCreateClaimResponseAmino;
}
export interface MsgCreateClaimResponseSDKType {}
export interface MsgRunDistributionResponse {}
export interface MsgRunDistributionResponseProtoMsg {
  typeUrl: "/sifnode.dispensation.v1.MsgRunDistributionResponse";
  value: Uint8Array;
}
export interface MsgRunDistributionResponseAmino {}
export interface MsgRunDistributionResponseAminoMsg {
  type: "/sifnode.dispensation.v1.MsgRunDistributionResponse";
  value: MsgRunDistributionResponseAmino;
}
export interface MsgRunDistributionResponseSDKType {}
export interface MsgCreateUserClaim {
  userClaimAddress: string;
  userClaimType: DistributionType;
}
export interface MsgCreateUserClaimProtoMsg {
  typeUrl: "/sifnode.dispensation.v1.MsgCreateUserClaim";
  value: Uint8Array;
}
export interface MsgCreateUserClaimAmino {
  user_claim_address?: string;
  user_claim_type?: DistributionType;
}
export interface MsgCreateUserClaimAminoMsg {
  type: "/sifnode.dispensation.v1.MsgCreateUserClaim";
  value: MsgCreateUserClaimAmino;
}
export interface MsgCreateUserClaimSDKType {
  user_claim_address: string;
  user_claim_type: DistributionType;
}
export interface MsgRunDistribution {
  authorizedRunner: string;
  distributionName: string;
  distributionType: DistributionType;
  distributionCount: bigint;
}
export interface MsgRunDistributionProtoMsg {
  typeUrl: "/sifnode.dispensation.v1.MsgRunDistribution";
  value: Uint8Array;
}
export interface MsgRunDistributionAmino {
  authorized_runner?: string;
  distribution_name?: string;
  distribution_type?: DistributionType;
  distribution_count?: string;
}
export interface MsgRunDistributionAminoMsg {
  type: "/sifnode.dispensation.v1.MsgRunDistribution";
  value: MsgRunDistributionAmino;
}
export interface MsgRunDistributionSDKType {
  authorized_runner: string;
  distribution_name: string;
  distribution_type: DistributionType;
  distribution_count: bigint;
}
function createBaseMsgCreateDistribution(): MsgCreateDistribution {
  return {
    distributor: "",
    authorizedRunner: "",
    distributionType: 0,
    output: []
  };
}
export const MsgCreateDistribution = {
  typeUrl: "/sifnode.dispensation.v1.MsgCreateDistribution",
  encode(message: MsgCreateDistribution, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.distributor !== "") {
      writer.uint32(10).string(message.distributor);
    }
    if (message.authorizedRunner !== "") {
      writer.uint32(18).string(message.authorizedRunner);
    }
    if (message.distributionType !== 0) {
      writer.uint32(24).int32(message.distributionType);
    }
    for (const v of message.output) {
      writer.uint32(34).string(v!);
    }
    return writer;
  },
  fromJSON(object: any): MsgCreateDistribution {
    return {
      distributor: isSet(object.distributor) ? String(object.distributor) : "",
      authorizedRunner: isSet(object.authorizedRunner) ? String(object.authorizedRunner) : "",
      distributionType: isSet(object.distributionType) ? distributionTypeFromJSON(object.distributionType) : -1,
      output: Array.isArray(object?.output) ? object.output.map((e: any) => String(e)) : []
    };
  },
  fromPartial(object: Partial<MsgCreateDistribution>): MsgCreateDistribution {
    const message = createBaseMsgCreateDistribution();
    message.distributor = object.distributor ?? "";
    message.authorizedRunner = object.authorizedRunner ?? "";
    message.distributionType = object.distributionType ?? 0;
    message.output = object.output?.map(e => e) || [];
    return message;
  },
  fromAmino(object: MsgCreateDistributionAmino): MsgCreateDistribution {
    const message = createBaseMsgCreateDistribution();
    if (object.distributor !== undefined && object.distributor !== null) {
      message.distributor = object.distributor;
    }
    if (object.authorized_runner !== undefined && object.authorized_runner !== null) {
      message.authorizedRunner = object.authorized_runner;
    }
    if (object.distribution_type !== undefined && object.distribution_type !== null) {
      message.distributionType = object.distribution_type;
    }
    message.output = object.output?.map(e => e) || [];
    return message;
  },
  toAmino(message: MsgCreateDistribution): MsgCreateDistributionAmino {
    const obj: any = {};
    obj.distributor = message.distributor === "" ? undefined : message.distributor;
    obj.authorized_runner = message.authorizedRunner === "" ? undefined : message.authorizedRunner;
    obj.distribution_type = message.distributionType === 0 ? undefined : message.distributionType;
    if (message.output) {
      obj.output = message.output.map(e => e);
    } else {
      obj.output = message.output;
    }
    return obj;
  },
  fromAminoMsg(object: MsgCreateDistributionAminoMsg): MsgCreateDistribution {
    return MsgCreateDistribution.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgCreateDistributionProtoMsg): MsgCreateDistribution {
    return MsgCreateDistribution.decode(message.value);
  },
  toProto(message: MsgCreateDistribution): Uint8Array {
    return MsgCreateDistribution.encode(message).finish();
  },
  toProtoMsg(message: MsgCreateDistribution): MsgCreateDistributionProtoMsg {
    return {
      typeUrl: "/sifnode.dispensation.v1.MsgCreateDistribution",
      value: MsgCreateDistribution.encode(message).finish()
    };
  }
};
function createBaseMsgCreateDistributionResponse(): MsgCreateDistributionResponse {
  return {};
}
export const MsgCreateDistributionResponse = {
  typeUrl: "/sifnode.dispensation.v1.MsgCreateDistributionResponse",
  encode(_: MsgCreateDistributionResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  fromJSON(_: any): MsgCreateDistributionResponse {
    return {};
  },
  fromPartial(_: Partial<MsgCreateDistributionResponse>): MsgCreateDistributionResponse {
    const message = createBaseMsgCreateDistributionResponse();
    return message;
  },
  fromAmino(_: MsgCreateDistributionResponseAmino): MsgCreateDistributionResponse {
    const message = createBaseMsgCreateDistributionResponse();
    return message;
  },
  toAmino(_: MsgCreateDistributionResponse): MsgCreateDistributionResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgCreateDistributionResponseAminoMsg): MsgCreateDistributionResponse {
    return MsgCreateDistributionResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgCreateDistributionResponseProtoMsg): MsgCreateDistributionResponse {
    return MsgCreateDistributionResponse.decode(message.value);
  },
  toProto(message: MsgCreateDistributionResponse): Uint8Array {
    return MsgCreateDistributionResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgCreateDistributionResponse): MsgCreateDistributionResponseProtoMsg {
    return {
      typeUrl: "/sifnode.dispensation.v1.MsgCreateDistributionResponse",
      value: MsgCreateDistributionResponse.encode(message).finish()
    };
  }
};
function createBaseMsgCreateClaimResponse(): MsgCreateClaimResponse {
  return {};
}
export const MsgCreateClaimResponse = {
  typeUrl: "/sifnode.dispensation.v1.MsgCreateClaimResponse",
  encode(_: MsgCreateClaimResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  fromJSON(_: any): MsgCreateClaimResponse {
    return {};
  },
  fromPartial(_: Partial<MsgCreateClaimResponse>): MsgCreateClaimResponse {
    const message = createBaseMsgCreateClaimResponse();
    return message;
  },
  fromAmino(_: MsgCreateClaimResponseAmino): MsgCreateClaimResponse {
    const message = createBaseMsgCreateClaimResponse();
    return message;
  },
  toAmino(_: MsgCreateClaimResponse): MsgCreateClaimResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgCreateClaimResponseAminoMsg): MsgCreateClaimResponse {
    return MsgCreateClaimResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgCreateClaimResponseProtoMsg): MsgCreateClaimResponse {
    return MsgCreateClaimResponse.decode(message.value);
  },
  toProto(message: MsgCreateClaimResponse): Uint8Array {
    return MsgCreateClaimResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgCreateClaimResponse): MsgCreateClaimResponseProtoMsg {
    return {
      typeUrl: "/sifnode.dispensation.v1.MsgCreateClaimResponse",
      value: MsgCreateClaimResponse.encode(message).finish()
    };
  }
};
function createBaseMsgRunDistributionResponse(): MsgRunDistributionResponse {
  return {};
}
export const MsgRunDistributionResponse = {
  typeUrl: "/sifnode.dispensation.v1.MsgRunDistributionResponse",
  encode(_: MsgRunDistributionResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  fromJSON(_: any): MsgRunDistributionResponse {
    return {};
  },
  fromPartial(_: Partial<MsgRunDistributionResponse>): MsgRunDistributionResponse {
    const message = createBaseMsgRunDistributionResponse();
    return message;
  },
  fromAmino(_: MsgRunDistributionResponseAmino): MsgRunDistributionResponse {
    const message = createBaseMsgRunDistributionResponse();
    return message;
  },
  toAmino(_: MsgRunDistributionResponse): MsgRunDistributionResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgRunDistributionResponseAminoMsg): MsgRunDistributionResponse {
    return MsgRunDistributionResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgRunDistributionResponseProtoMsg): MsgRunDistributionResponse {
    return MsgRunDistributionResponse.decode(message.value);
  },
  toProto(message: MsgRunDistributionResponse): Uint8Array {
    return MsgRunDistributionResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgRunDistributionResponse): MsgRunDistributionResponseProtoMsg {
    return {
      typeUrl: "/sifnode.dispensation.v1.MsgRunDistributionResponse",
      value: MsgRunDistributionResponse.encode(message).finish()
    };
  }
};
function createBaseMsgCreateUserClaim(): MsgCreateUserClaim {
  return {
    userClaimAddress: "",
    userClaimType: 0
  };
}
export const MsgCreateUserClaim = {
  typeUrl: "/sifnode.dispensation.v1.MsgCreateUserClaim",
  encode(message: MsgCreateUserClaim, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.userClaimAddress !== "") {
      writer.uint32(10).string(message.userClaimAddress);
    }
    if (message.userClaimType !== 0) {
      writer.uint32(16).int32(message.userClaimType);
    }
    return writer;
  },
  fromJSON(object: any): MsgCreateUserClaim {
    return {
      userClaimAddress: isSet(object.userClaimAddress) ? String(object.userClaimAddress) : "",
      userClaimType: isSet(object.userClaimType) ? distributionTypeFromJSON(object.userClaimType) : -1
    };
  },
  fromPartial(object: Partial<MsgCreateUserClaim>): MsgCreateUserClaim {
    const message = createBaseMsgCreateUserClaim();
    message.userClaimAddress = object.userClaimAddress ?? "";
    message.userClaimType = object.userClaimType ?? 0;
    return message;
  },
  fromAmino(object: MsgCreateUserClaimAmino): MsgCreateUserClaim {
    const message = createBaseMsgCreateUserClaim();
    if (object.user_claim_address !== undefined && object.user_claim_address !== null) {
      message.userClaimAddress = object.user_claim_address;
    }
    if (object.user_claim_type !== undefined && object.user_claim_type !== null) {
      message.userClaimType = object.user_claim_type;
    }
    return message;
  },
  toAmino(message: MsgCreateUserClaim): MsgCreateUserClaimAmino {
    const obj: any = {};
    obj.user_claim_address = message.userClaimAddress === "" ? undefined : message.userClaimAddress;
    obj.user_claim_type = message.userClaimType === 0 ? undefined : message.userClaimType;
    return obj;
  },
  fromAminoMsg(object: MsgCreateUserClaimAminoMsg): MsgCreateUserClaim {
    return MsgCreateUserClaim.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgCreateUserClaimProtoMsg): MsgCreateUserClaim {
    return MsgCreateUserClaim.decode(message.value);
  },
  toProto(message: MsgCreateUserClaim): Uint8Array {
    return MsgCreateUserClaim.encode(message).finish();
  },
  toProtoMsg(message: MsgCreateUserClaim): MsgCreateUserClaimProtoMsg {
    return {
      typeUrl: "/sifnode.dispensation.v1.MsgCreateUserClaim",
      value: MsgCreateUserClaim.encode(message).finish()
    };
  }
};
function createBaseMsgRunDistribution(): MsgRunDistribution {
  return {
    authorizedRunner: "",
    distributionName: "",
    distributionType: 0,
    distributionCount: BigInt(0)
  };
}
export const MsgRunDistribution = {
  typeUrl: "/sifnode.dispensation.v1.MsgRunDistribution",
  encode(message: MsgRunDistribution, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.authorizedRunner !== "") {
      writer.uint32(10).string(message.authorizedRunner);
    }
    if (message.distributionName !== "") {
      writer.uint32(18).string(message.distributionName);
    }
    if (message.distributionType !== 0) {
      writer.uint32(24).int32(message.distributionType);
    }
    if (message.distributionCount !== BigInt(0)) {
      writer.uint32(32).int64(message.distributionCount);
    }
    return writer;
  },
  fromJSON(object: any): MsgRunDistribution {
    return {
      authorizedRunner: isSet(object.authorizedRunner) ? String(object.authorizedRunner) : "",
      distributionName: isSet(object.distributionName) ? String(object.distributionName) : "",
      distributionType: isSet(object.distributionType) ? distributionTypeFromJSON(object.distributionType) : -1,
      distributionCount: isSet(object.distributionCount) ? BigInt(object.distributionCount.toString()) : BigInt(0)
    };
  },
  fromPartial(object: Partial<MsgRunDistribution>): MsgRunDistribution {
    const message = createBaseMsgRunDistribution();
    message.authorizedRunner = object.authorizedRunner ?? "";
    message.distributionName = object.distributionName ?? "";
    message.distributionType = object.distributionType ?? 0;
    message.distributionCount = object.distributionCount !== undefined && object.distributionCount !== null ? BigInt(object.distributionCount.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object: MsgRunDistributionAmino): MsgRunDistribution {
    const message = createBaseMsgRunDistribution();
    if (object.authorized_runner !== undefined && object.authorized_runner !== null) {
      message.authorizedRunner = object.authorized_runner;
    }
    if (object.distribution_name !== undefined && object.distribution_name !== null) {
      message.distributionName = object.distribution_name;
    }
    if (object.distribution_type !== undefined && object.distribution_type !== null) {
      message.distributionType = object.distribution_type;
    }
    if (object.distribution_count !== undefined && object.distribution_count !== null) {
      message.distributionCount = BigInt(object.distribution_count);
    }
    return message;
  },
  toAmino(message: MsgRunDistribution): MsgRunDistributionAmino {
    const obj: any = {};
    obj.authorized_runner = message.authorizedRunner === "" ? undefined : message.authorizedRunner;
    obj.distribution_name = message.distributionName === "" ? undefined : message.distributionName;
    obj.distribution_type = message.distributionType === 0 ? undefined : message.distributionType;
    obj.distribution_count = message.distributionCount !== BigInt(0) ? message.distributionCount.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: MsgRunDistributionAminoMsg): MsgRunDistribution {
    return MsgRunDistribution.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgRunDistributionProtoMsg): MsgRunDistribution {
    return MsgRunDistribution.decode(message.value);
  },
  toProto(message: MsgRunDistribution): Uint8Array {
    return MsgRunDistribution.encode(message).finish();
  },
  toProtoMsg(message: MsgRunDistribution): MsgRunDistributionProtoMsg {
    return {
      typeUrl: "/sifnode.dispensation.v1.MsgRunDistribution",
      value: MsgRunDistribution.encode(message).finish()
    };
  }
};