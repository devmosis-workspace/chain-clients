import { Coin, CoinSDKType } from "../../../cosmos/base/v1beta1/coin";
import * as _m0 from "protobufjs/minimal";
import { isSet } from "../../../helpers";
/** MsgIssueTokens represents a message used by the issuer to issue new tokens */
export interface MsgIssueTokens {
  sender: string;
  tokens?: Coin;
  receiver: string;
}
/** MsgIssueTokens represents a message used by the issuer to issue new tokens */
export interface MsgIssueTokensSDKType {
  sender: string;
  tokens?: CoinSDKType;
  receiver: string;
}
/** MsgIssueTokensResponse defines the Msg/IssueTokens response type. */
export interface MsgIssueTokensResponse {}
/** MsgIssueTokensResponse defines the Msg/IssueTokens response type. */
export interface MsgIssueTokensResponseSDKType {}
/** MsgRedeemTokens represents a message used by the issuer to redeem (burn) tokens */
export interface MsgRedeemTokens {
  sender: string;
  tokens?: Coin;
}
/** MsgRedeemTokens represents a message used by the issuer to redeem (burn) tokens */
export interface MsgRedeemTokensSDKType {
  sender: string;
  tokens?: CoinSDKType;
}
/** MsgRedeemTokensResponse defines the Msg/RedeemTokens response type. */
export interface MsgRedeemTokensResponse {}
/** MsgRedeemTokensResponse defines the Msg/RedeemTokens response type. */
export interface MsgRedeemTokensResponseSDKType {}
/** MsgBlockAddress represents a message used by the issuer to block an address from holding or transferring tokens */
export interface MsgBlockAddress {
  sender: string;
  denom: string;
  blockedAddress: string;
}
/** MsgBlockAddress represents a message used by the issuer to block an address from holding or transferring tokens */
export interface MsgBlockAddressSDKType {
  sender: string;
  denom: string;
  blocked_address: string;
}
/** MsgBlockAddressResponse defines the Msg/BlockAddress response type. */
export interface MsgBlockAddressResponse {}
/** MsgBlockAddressResponse defines the Msg/BlockAddress response type. */
export interface MsgBlockAddressResponseSDKType {}
/** MsgUnblockAddress message type used by the issuer to unblock an address from holding or transferring tokens */
export interface MsgUnblockAddress {
  sender: string;
  denom: string;
  blockedAddress: string;
}
/** MsgUnblockAddress message type used by the issuer to unblock an address from holding or transferring tokens */
export interface MsgUnblockAddressSDKType {
  sender: string;
  denom: string;
  blocked_address: string;
}
/** MsgUnblockAddressResponse defines the Msg/UnblockAddress response type. */
export interface MsgUnblockAddressResponse {}
/** MsgUnblockAddressResponse defines the Msg/UnblockAddress response type. */
export interface MsgUnblockAddressResponseSDKType {}
/** MsgSetPauseStatus message type used by the issuer to pause or unpause status */
export interface MsgSetPauseStatus {
  sender: string;
  denom: string;
  status: boolean;
}
/** MsgSetPauseStatus message type used by the issuer to pause or unpause status */
export interface MsgSetPauseStatusSDKType {
  sender: string;
  denom: string;
  status: boolean;
}
/** MsgSetPauseStatusResponse defines the Msg/SetPauseStatus response type. */
export interface MsgSetPauseStatusResponse {}
/** MsgSetPauseStatusResponse defines the Msg/SetPauseStatus response type. */
export interface MsgSetPauseStatusResponseSDKType {}
function createBaseMsgIssueTokens(): MsgIssueTokens {
  return {
    sender: "",
    tokens: undefined,
    receiver: ""
  };
}
export const MsgIssueTokens = {
  encode(message: MsgIssueTokens, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.sender !== "") {
      writer.uint32(10).string(message.sender);
    }
    if (message.tokens !== undefined) {
      Coin.encode(message.tokens, writer.uint32(18).fork()).ldelim();
    }
    if (message.receiver !== "") {
      writer.uint32(26).string(message.receiver);
    }
    return writer;
  },
  fromJSON(object: any): MsgIssueTokens {
    return {
      sender: isSet(object.sender) ? String(object.sender) : "",
      tokens: isSet(object.tokens) ? Coin.fromJSON(object.tokens) : undefined,
      receiver: isSet(object.receiver) ? String(object.receiver) : ""
    };
  },
  fromPartial(object: Partial<MsgIssueTokens>): MsgIssueTokens {
    const message = createBaseMsgIssueTokens();
    message.sender = object.sender ?? "";
    message.tokens = object.tokens !== undefined && object.tokens !== null ? Coin.fromPartial(object.tokens) : undefined;
    message.receiver = object.receiver ?? "";
    return message;
  }
};
function createBaseMsgIssueTokensResponse(): MsgIssueTokensResponse {
  return {};
}
export const MsgIssueTokensResponse = {
  encode(_: MsgIssueTokensResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },
  fromJSON(_: any): MsgIssueTokensResponse {
    return {};
  },
  fromPartial(_: Partial<MsgIssueTokensResponse>): MsgIssueTokensResponse {
    const message = createBaseMsgIssueTokensResponse();
    return message;
  }
};
function createBaseMsgRedeemTokens(): MsgRedeemTokens {
  return {
    sender: "",
    tokens: undefined
  };
}
export const MsgRedeemTokens = {
  encode(message: MsgRedeemTokens, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.sender !== "") {
      writer.uint32(10).string(message.sender);
    }
    if (message.tokens !== undefined) {
      Coin.encode(message.tokens, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): MsgRedeemTokens {
    return {
      sender: isSet(object.sender) ? String(object.sender) : "",
      tokens: isSet(object.tokens) ? Coin.fromJSON(object.tokens) : undefined
    };
  },
  fromPartial(object: Partial<MsgRedeemTokens>): MsgRedeemTokens {
    const message = createBaseMsgRedeemTokens();
    message.sender = object.sender ?? "";
    message.tokens = object.tokens !== undefined && object.tokens !== null ? Coin.fromPartial(object.tokens) : undefined;
    return message;
  }
};
function createBaseMsgRedeemTokensResponse(): MsgRedeemTokensResponse {
  return {};
}
export const MsgRedeemTokensResponse = {
  encode(_: MsgRedeemTokensResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },
  fromJSON(_: any): MsgRedeemTokensResponse {
    return {};
  },
  fromPartial(_: Partial<MsgRedeemTokensResponse>): MsgRedeemTokensResponse {
    const message = createBaseMsgRedeemTokensResponse();
    return message;
  }
};
function createBaseMsgBlockAddress(): MsgBlockAddress {
  return {
    sender: "",
    denom: "",
    blockedAddress: ""
  };
}
export const MsgBlockAddress = {
  encode(message: MsgBlockAddress, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.sender !== "") {
      writer.uint32(10).string(message.sender);
    }
    if (message.denom !== "") {
      writer.uint32(18).string(message.denom);
    }
    if (message.blockedAddress !== "") {
      writer.uint32(26).string(message.blockedAddress);
    }
    return writer;
  },
  fromJSON(object: any): MsgBlockAddress {
    return {
      sender: isSet(object.sender) ? String(object.sender) : "",
      denom: isSet(object.denom) ? String(object.denom) : "",
      blockedAddress: isSet(object.blockedAddress) ? String(object.blockedAddress) : ""
    };
  },
  fromPartial(object: Partial<MsgBlockAddress>): MsgBlockAddress {
    const message = createBaseMsgBlockAddress();
    message.sender = object.sender ?? "";
    message.denom = object.denom ?? "";
    message.blockedAddress = object.blockedAddress ?? "";
    return message;
  }
};
function createBaseMsgBlockAddressResponse(): MsgBlockAddressResponse {
  return {};
}
export const MsgBlockAddressResponse = {
  encode(_: MsgBlockAddressResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },
  fromJSON(_: any): MsgBlockAddressResponse {
    return {};
  },
  fromPartial(_: Partial<MsgBlockAddressResponse>): MsgBlockAddressResponse {
    const message = createBaseMsgBlockAddressResponse();
    return message;
  }
};
function createBaseMsgUnblockAddress(): MsgUnblockAddress {
  return {
    sender: "",
    denom: "",
    blockedAddress: ""
  };
}
export const MsgUnblockAddress = {
  encode(message: MsgUnblockAddress, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.sender !== "") {
      writer.uint32(10).string(message.sender);
    }
    if (message.denom !== "") {
      writer.uint32(18).string(message.denom);
    }
    if (message.blockedAddress !== "") {
      writer.uint32(26).string(message.blockedAddress);
    }
    return writer;
  },
  fromJSON(object: any): MsgUnblockAddress {
    return {
      sender: isSet(object.sender) ? String(object.sender) : "",
      denom: isSet(object.denom) ? String(object.denom) : "",
      blockedAddress: isSet(object.blockedAddress) ? String(object.blockedAddress) : ""
    };
  },
  fromPartial(object: Partial<MsgUnblockAddress>): MsgUnblockAddress {
    const message = createBaseMsgUnblockAddress();
    message.sender = object.sender ?? "";
    message.denom = object.denom ?? "";
    message.blockedAddress = object.blockedAddress ?? "";
    return message;
  }
};
function createBaseMsgUnblockAddressResponse(): MsgUnblockAddressResponse {
  return {};
}
export const MsgUnblockAddressResponse = {
  encode(_: MsgUnblockAddressResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },
  fromJSON(_: any): MsgUnblockAddressResponse {
    return {};
  },
  fromPartial(_: Partial<MsgUnblockAddressResponse>): MsgUnblockAddressResponse {
    const message = createBaseMsgUnblockAddressResponse();
    return message;
  }
};
function createBaseMsgSetPauseStatus(): MsgSetPauseStatus {
  return {
    sender: "",
    denom: "",
    status: false
  };
}
export const MsgSetPauseStatus = {
  encode(message: MsgSetPauseStatus, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.sender !== "") {
      writer.uint32(10).string(message.sender);
    }
    if (message.denom !== "") {
      writer.uint32(18).string(message.denom);
    }
    if (message.status === true) {
      writer.uint32(24).bool(message.status);
    }
    return writer;
  },
  fromJSON(object: any): MsgSetPauseStatus {
    return {
      sender: isSet(object.sender) ? String(object.sender) : "",
      denom: isSet(object.denom) ? String(object.denom) : "",
      status: isSet(object.status) ? Boolean(object.status) : false
    };
  },
  fromPartial(object: Partial<MsgSetPauseStatus>): MsgSetPauseStatus {
    const message = createBaseMsgSetPauseStatus();
    message.sender = object.sender ?? "";
    message.denom = object.denom ?? "";
    message.status = object.status ?? false;
    return message;
  }
};
function createBaseMsgSetPauseStatusResponse(): MsgSetPauseStatusResponse {
  return {};
}
export const MsgSetPauseStatusResponse = {
  encode(_: MsgSetPauseStatusResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },
  fromJSON(_: any): MsgSetPauseStatusResponse {
    return {};
  },
  fromPartial(_: Partial<MsgSetPauseStatusResponse>): MsgSetPauseStatusResponse {
    const message = createBaseMsgSetPauseStatusResponse();
    return message;
  }
};