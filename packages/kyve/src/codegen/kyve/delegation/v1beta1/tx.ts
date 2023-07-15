import { Long, isSet } from "../../../helpers";
import * as _m0 from "protobufjs/minimal";
/** MsgDelegate ... */
export interface MsgDelegate {
  /** creator ... */
  creator: string;
  /** staker ... */
  staker: string;
  /** amount ... */
  amount: Long;
}
/** MsgDelegate ... */
export interface MsgDelegateSDKType {
  creator: string;
  staker: string;
  amount: Long;
}
/** MsgDelegatePoolResponse defines the Msg/DelegatePool response type. */
export interface MsgDelegateResponse {}
/** MsgDelegatePoolResponse defines the Msg/DelegatePool response type. */
export interface MsgDelegateResponseSDKType {}
/** MsgWithdrawPool defines a SDK message for withdrawing delegation rewards from a specific pool. */
export interface MsgWithdrawRewards {
  /** creator ... */
  creator: string;
  /** staker ... */
  staker: string;
}
/** MsgWithdrawPool defines a SDK message for withdrawing delegation rewards from a specific pool. */
export interface MsgWithdrawRewardsSDKType {
  creator: string;
  staker: string;
}
/** MsgWithdrawPoolResponse defines the Msg/WithdrawPool response type. */
export interface MsgWithdrawRewardsResponse {}
/** MsgWithdrawPoolResponse defines the Msg/WithdrawPool response type. */
export interface MsgWithdrawRewardsResponseSDKType {}
/** MsgUndelegatePool defines a SDK message for undelegating from a specific pool. */
export interface MsgUndelegate {
  /** creator ... */
  creator: string;
  /** staker ... */
  staker: string;
  /** amount ... */
  amount: Long;
}
/** MsgUndelegatePool defines a SDK message for undelegating from a specific pool. */
export interface MsgUndelegateSDKType {
  creator: string;
  staker: string;
  amount: Long;
}
/** MsgUndelegatePoolResponse defines the Msg/UndelegatePool response type. */
export interface MsgUndelegateResponse {}
/** MsgUndelegatePoolResponse defines the Msg/UndelegatePool response type. */
export interface MsgUndelegateResponseSDKType {}
/**
 * MsgRedelegatePool defines a SDK message for redelegating from a
 * staker in a pool to another staker in the same or another pool
 */
export interface MsgRedelegate {
  /** creator ... */
  creator: string;
  /** staker ... */
  fromStaker: string;
  /** staker ... */
  toStaker: string;
  /** amount ... */
  amount: Long;
}
/**
 * MsgRedelegatePool defines a SDK message for redelegating from a
 * staker in a pool to another staker in the same or another pool
 */
export interface MsgRedelegateSDKType {
  creator: string;
  from_staker: string;
  to_staker: string;
  amount: Long;
}
/** MsgUndelegatePoolResponse defines the Msg/UndelegatePool response type. */
export interface MsgRedelegateResponse {}
/** MsgUndelegatePoolResponse defines the Msg/UndelegatePool response type. */
export interface MsgRedelegateResponseSDKType {}
/** MsgUpdateParams defines a SDK message for updating the module parameters. */
export interface MsgUpdateParams {
  /** authority is the address of the governance account. */
  authority: string;
  /** payload defines the x/delegation parameters to update. */
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
function createBaseMsgDelegate(): MsgDelegate {
  return {
    creator: "",
    staker: "",
    amount: Long.UZERO
  };
}
export const MsgDelegate = {
  encode(message: MsgDelegate, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.staker !== "") {
      writer.uint32(18).string(message.staker);
    }
    if (!message.amount.isZero()) {
      writer.uint32(24).uint64(message.amount);
    }
    return writer;
  },
  fromJSON(object: any): MsgDelegate {
    return {
      creator: isSet(object.creator) ? String(object.creator) : "",
      staker: isSet(object.staker) ? String(object.staker) : "",
      amount: isSet(object.amount) ? Long.fromValue(object.amount) : Long.UZERO
    };
  },
  fromPartial(object: Partial<MsgDelegate>): MsgDelegate {
    const message = createBaseMsgDelegate();
    message.creator = object.creator ?? "";
    message.staker = object.staker ?? "";
    message.amount = object.amount !== undefined && object.amount !== null ? Long.fromValue(object.amount) : Long.UZERO;
    return message;
  }
};
function createBaseMsgDelegateResponse(): MsgDelegateResponse {
  return {};
}
export const MsgDelegateResponse = {
  encode(_: MsgDelegateResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },
  fromJSON(_: any): MsgDelegateResponse {
    return {};
  },
  fromPartial(_: Partial<MsgDelegateResponse>): MsgDelegateResponse {
    const message = createBaseMsgDelegateResponse();
    return message;
  }
};
function createBaseMsgWithdrawRewards(): MsgWithdrawRewards {
  return {
    creator: "",
    staker: ""
  };
}
export const MsgWithdrawRewards = {
  encode(message: MsgWithdrawRewards, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.staker !== "") {
      writer.uint32(18).string(message.staker);
    }
    return writer;
  },
  fromJSON(object: any): MsgWithdrawRewards {
    return {
      creator: isSet(object.creator) ? String(object.creator) : "",
      staker: isSet(object.staker) ? String(object.staker) : ""
    };
  },
  fromPartial(object: Partial<MsgWithdrawRewards>): MsgWithdrawRewards {
    const message = createBaseMsgWithdrawRewards();
    message.creator = object.creator ?? "";
    message.staker = object.staker ?? "";
    return message;
  }
};
function createBaseMsgWithdrawRewardsResponse(): MsgWithdrawRewardsResponse {
  return {};
}
export const MsgWithdrawRewardsResponse = {
  encode(_: MsgWithdrawRewardsResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },
  fromJSON(_: any): MsgWithdrawRewardsResponse {
    return {};
  },
  fromPartial(_: Partial<MsgWithdrawRewardsResponse>): MsgWithdrawRewardsResponse {
    const message = createBaseMsgWithdrawRewardsResponse();
    return message;
  }
};
function createBaseMsgUndelegate(): MsgUndelegate {
  return {
    creator: "",
    staker: "",
    amount: Long.UZERO
  };
}
export const MsgUndelegate = {
  encode(message: MsgUndelegate, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.staker !== "") {
      writer.uint32(18).string(message.staker);
    }
    if (!message.amount.isZero()) {
      writer.uint32(24).uint64(message.amount);
    }
    return writer;
  },
  fromJSON(object: any): MsgUndelegate {
    return {
      creator: isSet(object.creator) ? String(object.creator) : "",
      staker: isSet(object.staker) ? String(object.staker) : "",
      amount: isSet(object.amount) ? Long.fromValue(object.amount) : Long.UZERO
    };
  },
  fromPartial(object: Partial<MsgUndelegate>): MsgUndelegate {
    const message = createBaseMsgUndelegate();
    message.creator = object.creator ?? "";
    message.staker = object.staker ?? "";
    message.amount = object.amount !== undefined && object.amount !== null ? Long.fromValue(object.amount) : Long.UZERO;
    return message;
  }
};
function createBaseMsgUndelegateResponse(): MsgUndelegateResponse {
  return {};
}
export const MsgUndelegateResponse = {
  encode(_: MsgUndelegateResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },
  fromJSON(_: any): MsgUndelegateResponse {
    return {};
  },
  fromPartial(_: Partial<MsgUndelegateResponse>): MsgUndelegateResponse {
    const message = createBaseMsgUndelegateResponse();
    return message;
  }
};
function createBaseMsgRedelegate(): MsgRedelegate {
  return {
    creator: "",
    fromStaker: "",
    toStaker: "",
    amount: Long.UZERO
  };
}
export const MsgRedelegate = {
  encode(message: MsgRedelegate, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.fromStaker !== "") {
      writer.uint32(18).string(message.fromStaker);
    }
    if (message.toStaker !== "") {
      writer.uint32(26).string(message.toStaker);
    }
    if (!message.amount.isZero()) {
      writer.uint32(32).uint64(message.amount);
    }
    return writer;
  },
  fromJSON(object: any): MsgRedelegate {
    return {
      creator: isSet(object.creator) ? String(object.creator) : "",
      fromStaker: isSet(object.fromStaker) ? String(object.fromStaker) : "",
      toStaker: isSet(object.toStaker) ? String(object.toStaker) : "",
      amount: isSet(object.amount) ? Long.fromValue(object.amount) : Long.UZERO
    };
  },
  fromPartial(object: Partial<MsgRedelegate>): MsgRedelegate {
    const message = createBaseMsgRedelegate();
    message.creator = object.creator ?? "";
    message.fromStaker = object.fromStaker ?? "";
    message.toStaker = object.toStaker ?? "";
    message.amount = object.amount !== undefined && object.amount !== null ? Long.fromValue(object.amount) : Long.UZERO;
    return message;
  }
};
function createBaseMsgRedelegateResponse(): MsgRedelegateResponse {
  return {};
}
export const MsgRedelegateResponse = {
  encode(_: MsgRedelegateResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },
  fromJSON(_: any): MsgRedelegateResponse {
    return {};
  },
  fromPartial(_: Partial<MsgRedelegateResponse>): MsgRedelegateResponse {
    const message = createBaseMsgRedelegateResponse();
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