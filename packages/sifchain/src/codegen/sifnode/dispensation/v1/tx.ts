import { DistributionType, distributionTypeFromJSON } from "./types";
import { Long, isSet } from "../../../helpers";
import * as _m0 from "protobufjs/minimal";
export interface MsgCreateDistribution {
  distributor: string;
  authorizedRunner: string;
  distributionType: DistributionType;
  output: string[];
}
export interface MsgCreateDistributionSDKType {
  distributor: string;
  authorized_runner: string;
  distribution_type: DistributionType;
  output: string[];
}
export interface MsgCreateDistributionResponse {}
export interface MsgCreateDistributionResponseSDKType {}
export interface MsgCreateClaimResponse {}
export interface MsgCreateClaimResponseSDKType {}
export interface MsgRunDistributionResponse {}
export interface MsgRunDistributionResponseSDKType {}
export interface MsgCreateUserClaim {
  userClaimAddress: string;
  userClaimType: DistributionType;
}
export interface MsgCreateUserClaimSDKType {
  user_claim_address: string;
  user_claim_type: DistributionType;
}
export interface MsgRunDistribution {
  authorizedRunner: string;
  distributionName: string;
  distributionType: DistributionType;
  distributionCount: Long;
}
export interface MsgRunDistributionSDKType {
  authorized_runner: string;
  distribution_name: string;
  distribution_type: DistributionType;
  distribution_count: Long;
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
  encode(message: MsgCreateDistribution, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
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
      distributionType: isSet(object.distributionType) ? distributionTypeFromJSON(object.distributionType) : 0,
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
  }
};
function createBaseMsgCreateDistributionResponse(): MsgCreateDistributionResponse {
  return {};
}
export const MsgCreateDistributionResponse = {
  encode(_: MsgCreateDistributionResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },
  fromJSON(_: any): MsgCreateDistributionResponse {
    return {};
  },
  fromPartial(_: Partial<MsgCreateDistributionResponse>): MsgCreateDistributionResponse {
    const message = createBaseMsgCreateDistributionResponse();
    return message;
  }
};
function createBaseMsgCreateClaimResponse(): MsgCreateClaimResponse {
  return {};
}
export const MsgCreateClaimResponse = {
  encode(_: MsgCreateClaimResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },
  fromJSON(_: any): MsgCreateClaimResponse {
    return {};
  },
  fromPartial(_: Partial<MsgCreateClaimResponse>): MsgCreateClaimResponse {
    const message = createBaseMsgCreateClaimResponse();
    return message;
  }
};
function createBaseMsgRunDistributionResponse(): MsgRunDistributionResponse {
  return {};
}
export const MsgRunDistributionResponse = {
  encode(_: MsgRunDistributionResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },
  fromJSON(_: any): MsgRunDistributionResponse {
    return {};
  },
  fromPartial(_: Partial<MsgRunDistributionResponse>): MsgRunDistributionResponse {
    const message = createBaseMsgRunDistributionResponse();
    return message;
  }
};
function createBaseMsgCreateUserClaim(): MsgCreateUserClaim {
  return {
    userClaimAddress: "",
    userClaimType: 0
  };
}
export const MsgCreateUserClaim = {
  encode(message: MsgCreateUserClaim, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
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
      userClaimType: isSet(object.userClaimType) ? distributionTypeFromJSON(object.userClaimType) : 0
    };
  },
  fromPartial(object: Partial<MsgCreateUserClaim>): MsgCreateUserClaim {
    const message = createBaseMsgCreateUserClaim();
    message.userClaimAddress = object.userClaimAddress ?? "";
    message.userClaimType = object.userClaimType ?? 0;
    return message;
  }
};
function createBaseMsgRunDistribution(): MsgRunDistribution {
  return {
    authorizedRunner: "",
    distributionName: "",
    distributionType: 0,
    distributionCount: Long.ZERO
  };
}
export const MsgRunDistribution = {
  encode(message: MsgRunDistribution, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.authorizedRunner !== "") {
      writer.uint32(10).string(message.authorizedRunner);
    }
    if (message.distributionName !== "") {
      writer.uint32(18).string(message.distributionName);
    }
    if (message.distributionType !== 0) {
      writer.uint32(24).int32(message.distributionType);
    }
    if (!message.distributionCount.isZero()) {
      writer.uint32(32).int64(message.distributionCount);
    }
    return writer;
  },
  fromJSON(object: any): MsgRunDistribution {
    return {
      authorizedRunner: isSet(object.authorizedRunner) ? String(object.authorizedRunner) : "",
      distributionName: isSet(object.distributionName) ? String(object.distributionName) : "",
      distributionType: isSet(object.distributionType) ? distributionTypeFromJSON(object.distributionType) : 0,
      distributionCount: isSet(object.distributionCount) ? Long.fromValue(object.distributionCount) : Long.ZERO
    };
  },
  fromPartial(object: Partial<MsgRunDistribution>): MsgRunDistribution {
    const message = createBaseMsgRunDistribution();
    message.authorizedRunner = object.authorizedRunner ?? "";
    message.distributionName = object.distributionName ?? "";
    message.distributionType = object.distributionType ?? 0;
    message.distributionCount = object.distributionCount !== undefined && object.distributionCount !== null ? Long.fromValue(object.distributionCount) : Long.ZERO;
    return message;
  }
};