import { Long, isSet } from "../../../helpers";
import * as _m0 from "protobufjs/minimal";
/** MsgCreateStaker defines a SDK message for creating a staker. */
export interface MsgCreateStaker {
  /** creator is the address of the staker. */
  creator: string;
  /** amount is the initial self-stake of the staker. */
  amount: Long;
  /**
   * commission is the percentage that is deducted from rewards before
   * distributing the staker's delegators.
   */
  commission: string;
}
/** MsgCreateStaker defines a SDK message for creating a staker. */
export interface MsgCreateStakerSDKType {
  creator: string;
  amount: Long;
  commission: string;
}
/** MsgStakePoolResponse defines the Msg/StakePool response type. */
export interface MsgCreateStakerResponse {}
/** MsgStakePoolResponse defines the Msg/StakePool response type. */
export interface MsgCreateStakerResponseSDKType {}
/** MsgUpdateMetadata defines a SDK message for claiming the uploader role. */
export interface MsgUpdateMetadata {
  /** creator ... */
  creator: string;
  /** moniker ... */
  moniker: string;
  /** website ... */
  website: string;
  /** identity from keybase.io */
  identity: string;
  /** security_contact ... */
  securityContact: string;
  /** details ... */
  details: string;
}
/** MsgUpdateMetadata defines a SDK message for claiming the uploader role. */
export interface MsgUpdateMetadataSDKType {
  creator: string;
  moniker: string;
  website: string;
  identity: string;
  security_contact: string;
  details: string;
}
/** MsgUpdateMetadataResponse defines the Msg/MsgUpdateMetadata response type. */
export interface MsgUpdateMetadataResponse {}
/** MsgUpdateMetadataResponse defines the Msg/MsgUpdateMetadata response type. */
export interface MsgUpdateMetadataResponseSDKType {}
/** MsgUpdateCommission ... */
export interface MsgUpdateCommission {
  /** creator ... */
  creator: string;
  /** commission ... */
  commission: string;
}
/** MsgUpdateCommission ... */
export interface MsgUpdateCommissionSDKType {
  creator: string;
  commission: string;
}
/** MsgUpdateCommissionResponse ... */
export interface MsgUpdateCommissionResponse {}
/** MsgUpdateCommissionResponse ... */
export interface MsgUpdateCommissionResponseSDKType {}
/** MsgJoinPool ... */
export interface MsgJoinPool {
  /** creator ... */
  creator: string;
  /** pool_id ... */
  poolId: Long;
  /** valaddress ... */
  valaddress: string;
  /** amount ... */
  amount: Long;
}
/** MsgJoinPool ... */
export interface MsgJoinPoolSDKType {
  creator: string;
  pool_id: Long;
  valaddress: string;
  amount: Long;
}
/** MsgJoinPoolResponse ... */
export interface MsgJoinPoolResponse {}
/** MsgJoinPoolResponse ... */
export interface MsgJoinPoolResponseSDKType {}
/** MsgLeavePool ... */
export interface MsgLeavePool {
  /** creator ... */
  creator: string;
  /** pool_id ... */
  poolId: Long;
}
/** MsgLeavePool ... */
export interface MsgLeavePoolSDKType {
  creator: string;
  pool_id: Long;
}
/** MsgReactivateStakerResponse ... */
export interface MsgLeavePoolResponse {}
/** MsgReactivateStakerResponse ... */
export interface MsgLeavePoolResponseSDKType {}
/** MsgUpdateParams defines a SDK message for updating the module parameters. */
export interface MsgUpdateParams {
  /** authority is the address of the governance account. */
  authority: string;
  /** payload defines the x/stakers parameters to update. */
  payload: string;
}
/** MsgUpdateParams defines a SDK message for updating the module parameters. */
export interface MsgUpdateParamsSDKType {
  authority: string;
  payload: string;
}
/** MsgUpdateParamsResponse defines the Msg/UpdateParams response type. */
export interface MsgUpdateParamsResponse {}
/** MsgUpdateParamsResponse defines the Msg/UpdateParams response type. */
export interface MsgUpdateParamsResponseSDKType {}
function createBaseMsgCreateStaker(): MsgCreateStaker {
  return {
    creator: "",
    amount: Long.UZERO,
    commission: ""
  };
}
export const MsgCreateStaker = {
  encode(message: MsgCreateStaker, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (!message.amount.isZero()) {
      writer.uint32(16).uint64(message.amount);
    }
    if (message.commission !== "") {
      writer.uint32(26).string(message.commission);
    }
    return writer;
  },
  fromJSON(object: any): MsgCreateStaker {
    return {
      creator: isSet(object.creator) ? String(object.creator) : "",
      amount: isSet(object.amount) ? Long.fromValue(object.amount) : Long.UZERO,
      commission: isSet(object.commission) ? String(object.commission) : ""
    };
  },
  fromPartial(object: Partial<MsgCreateStaker>): MsgCreateStaker {
    const message = createBaseMsgCreateStaker();
    message.creator = object.creator ?? "";
    message.amount = object.amount !== undefined && object.amount !== null ? Long.fromValue(object.amount) : Long.UZERO;
    message.commission = object.commission ?? "";
    return message;
  }
};
function createBaseMsgCreateStakerResponse(): MsgCreateStakerResponse {
  return {};
}
export const MsgCreateStakerResponse = {
  encode(_: MsgCreateStakerResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },
  fromJSON(_: any): MsgCreateStakerResponse {
    return {};
  },
  fromPartial(_: Partial<MsgCreateStakerResponse>): MsgCreateStakerResponse {
    const message = createBaseMsgCreateStakerResponse();
    return message;
  }
};
function createBaseMsgUpdateMetadata(): MsgUpdateMetadata {
  return {
    creator: "",
    moniker: "",
    website: "",
    identity: "",
    securityContact: "",
    details: ""
  };
}
export const MsgUpdateMetadata = {
  encode(message: MsgUpdateMetadata, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.moniker !== "") {
      writer.uint32(18).string(message.moniker);
    }
    if (message.website !== "") {
      writer.uint32(26).string(message.website);
    }
    if (message.identity !== "") {
      writer.uint32(34).string(message.identity);
    }
    if (message.securityContact !== "") {
      writer.uint32(42).string(message.securityContact);
    }
    if (message.details !== "") {
      writer.uint32(50).string(message.details);
    }
    return writer;
  },
  fromJSON(object: any): MsgUpdateMetadata {
    return {
      creator: isSet(object.creator) ? String(object.creator) : "",
      moniker: isSet(object.moniker) ? String(object.moniker) : "",
      website: isSet(object.website) ? String(object.website) : "",
      identity: isSet(object.identity) ? String(object.identity) : "",
      securityContact: isSet(object.securityContact) ? String(object.securityContact) : "",
      details: isSet(object.details) ? String(object.details) : ""
    };
  },
  fromPartial(object: Partial<MsgUpdateMetadata>): MsgUpdateMetadata {
    const message = createBaseMsgUpdateMetadata();
    message.creator = object.creator ?? "";
    message.moniker = object.moniker ?? "";
    message.website = object.website ?? "";
    message.identity = object.identity ?? "";
    message.securityContact = object.securityContact ?? "";
    message.details = object.details ?? "";
    return message;
  }
};
function createBaseMsgUpdateMetadataResponse(): MsgUpdateMetadataResponse {
  return {};
}
export const MsgUpdateMetadataResponse = {
  encode(_: MsgUpdateMetadataResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },
  fromJSON(_: any): MsgUpdateMetadataResponse {
    return {};
  },
  fromPartial(_: Partial<MsgUpdateMetadataResponse>): MsgUpdateMetadataResponse {
    const message = createBaseMsgUpdateMetadataResponse();
    return message;
  }
};
function createBaseMsgUpdateCommission(): MsgUpdateCommission {
  return {
    creator: "",
    commission: ""
  };
}
export const MsgUpdateCommission = {
  encode(message: MsgUpdateCommission, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.commission !== "") {
      writer.uint32(18).string(message.commission);
    }
    return writer;
  },
  fromJSON(object: any): MsgUpdateCommission {
    return {
      creator: isSet(object.creator) ? String(object.creator) : "",
      commission: isSet(object.commission) ? String(object.commission) : ""
    };
  },
  fromPartial(object: Partial<MsgUpdateCommission>): MsgUpdateCommission {
    const message = createBaseMsgUpdateCommission();
    message.creator = object.creator ?? "";
    message.commission = object.commission ?? "";
    return message;
  }
};
function createBaseMsgUpdateCommissionResponse(): MsgUpdateCommissionResponse {
  return {};
}
export const MsgUpdateCommissionResponse = {
  encode(_: MsgUpdateCommissionResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },
  fromJSON(_: any): MsgUpdateCommissionResponse {
    return {};
  },
  fromPartial(_: Partial<MsgUpdateCommissionResponse>): MsgUpdateCommissionResponse {
    const message = createBaseMsgUpdateCommissionResponse();
    return message;
  }
};
function createBaseMsgJoinPool(): MsgJoinPool {
  return {
    creator: "",
    poolId: Long.UZERO,
    valaddress: "",
    amount: Long.UZERO
  };
}
export const MsgJoinPool = {
  encode(message: MsgJoinPool, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (!message.poolId.isZero()) {
      writer.uint32(16).uint64(message.poolId);
    }
    if (message.valaddress !== "") {
      writer.uint32(26).string(message.valaddress);
    }
    if (!message.amount.isZero()) {
      writer.uint32(32).uint64(message.amount);
    }
    return writer;
  },
  fromJSON(object: any): MsgJoinPool {
    return {
      creator: isSet(object.creator) ? String(object.creator) : "",
      poolId: isSet(object.poolId) ? Long.fromValue(object.poolId) : Long.UZERO,
      valaddress: isSet(object.valaddress) ? String(object.valaddress) : "",
      amount: isSet(object.amount) ? Long.fromValue(object.amount) : Long.UZERO
    };
  },
  fromPartial(object: Partial<MsgJoinPool>): MsgJoinPool {
    const message = createBaseMsgJoinPool();
    message.creator = object.creator ?? "";
    message.poolId = object.poolId !== undefined && object.poolId !== null ? Long.fromValue(object.poolId) : Long.UZERO;
    message.valaddress = object.valaddress ?? "";
    message.amount = object.amount !== undefined && object.amount !== null ? Long.fromValue(object.amount) : Long.UZERO;
    return message;
  }
};
function createBaseMsgJoinPoolResponse(): MsgJoinPoolResponse {
  return {};
}
export const MsgJoinPoolResponse = {
  encode(_: MsgJoinPoolResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },
  fromJSON(_: any): MsgJoinPoolResponse {
    return {};
  },
  fromPartial(_: Partial<MsgJoinPoolResponse>): MsgJoinPoolResponse {
    const message = createBaseMsgJoinPoolResponse();
    return message;
  }
};
function createBaseMsgLeavePool(): MsgLeavePool {
  return {
    creator: "",
    poolId: Long.UZERO
  };
}
export const MsgLeavePool = {
  encode(message: MsgLeavePool, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (!message.poolId.isZero()) {
      writer.uint32(16).uint64(message.poolId);
    }
    return writer;
  },
  fromJSON(object: any): MsgLeavePool {
    return {
      creator: isSet(object.creator) ? String(object.creator) : "",
      poolId: isSet(object.poolId) ? Long.fromValue(object.poolId) : Long.UZERO
    };
  },
  fromPartial(object: Partial<MsgLeavePool>): MsgLeavePool {
    const message = createBaseMsgLeavePool();
    message.creator = object.creator ?? "";
    message.poolId = object.poolId !== undefined && object.poolId !== null ? Long.fromValue(object.poolId) : Long.UZERO;
    return message;
  }
};
function createBaseMsgLeavePoolResponse(): MsgLeavePoolResponse {
  return {};
}
export const MsgLeavePoolResponse = {
  encode(_: MsgLeavePoolResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },
  fromJSON(_: any): MsgLeavePoolResponse {
    return {};
  },
  fromPartial(_: Partial<MsgLeavePoolResponse>): MsgLeavePoolResponse {
    const message = createBaseMsgLeavePoolResponse();
    return message;
  }
};
function createBaseMsgUpdateParams(): MsgUpdateParams {
  return {
    authority: "",
    payload: ""
  };
}
export const MsgUpdateParams = {
  encode(message: MsgUpdateParams, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.authority !== "") {
      writer.uint32(10).string(message.authority);
    }
    if (message.payload !== "") {
      writer.uint32(18).string(message.payload);
    }
    return writer;
  },
  fromJSON(object: any): MsgUpdateParams {
    return {
      authority: isSet(object.authority) ? String(object.authority) : "",
      payload: isSet(object.payload) ? String(object.payload) : ""
    };
  },
  fromPartial(object: Partial<MsgUpdateParams>): MsgUpdateParams {
    const message = createBaseMsgUpdateParams();
    message.authority = object.authority ?? "";
    message.payload = object.payload ?? "";
    return message;
  }
};
function createBaseMsgUpdateParamsResponse(): MsgUpdateParamsResponse {
  return {};
}
export const MsgUpdateParamsResponse = {
  encode(_: MsgUpdateParamsResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },
  fromJSON(_: any): MsgUpdateParamsResponse {
    return {};
  },
  fromPartial(_: Partial<MsgUpdateParamsResponse>): MsgUpdateParamsResponse {
    const message = createBaseMsgUpdateParamsResponse();
    return message;
  }
};