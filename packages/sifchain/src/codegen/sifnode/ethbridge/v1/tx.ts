import { EthBridgeClaim, EthBridgeClaimSDKType } from "./types";
import { Long, isSet } from "../../../helpers";
import * as _m0 from "protobufjs/minimal";
export interface MsgPause {
  signer: string;
  isPaused: boolean;
}
export interface MsgPauseSDKType {
  signer: string;
  is_paused: boolean;
}
export interface MsgPauseResponse {}
export interface MsgPauseResponseSDKType {}
/** MsgLock defines a message for locking coins and triggering a related event */
export interface MsgLock {
  cosmosSender: string;
  amount: string;
  symbol: string;
  ethereumChainId: Long;
  ethereumReceiver: string;
  cethAmount: string;
}
/** MsgLock defines a message for locking coins and triggering a related event */
export interface MsgLockSDKType {
  cosmos_sender: string;
  amount: string;
  symbol: string;
  ethereum_chain_id: Long;
  ethereum_receiver: string;
  ceth_amount: string;
}
export interface MsgLockResponse {}
export interface MsgLockResponseSDKType {}
/** MsgBurn defines a message for burning coins and triggering a related event */
export interface MsgBurn {
  cosmosSender: string;
  amount: string;
  symbol: string;
  ethereumChainId: Long;
  ethereumReceiver: string;
  cethAmount: string;
}
/** MsgBurn defines a message for burning coins and triggering a related event */
export interface MsgBurnSDKType {
  cosmos_sender: string;
  amount: string;
  symbol: string;
  ethereum_chain_id: Long;
  ethereum_receiver: string;
  ceth_amount: string;
}
export interface MsgBurnResponse {}
export interface MsgBurnResponseSDKType {}
export interface MsgCreateEthBridgeClaim {
  ethBridgeClaim?: EthBridgeClaim;
}
export interface MsgCreateEthBridgeClaimSDKType {
  eth_bridge_claim?: EthBridgeClaimSDKType;
}
export interface MsgCreateEthBridgeClaimResponse {}
export interface MsgCreateEthBridgeClaimResponseSDKType {}
/** MsgUpdateWhiteListValidator add or remove validator from whitelist */
export interface MsgUpdateWhiteListValidator {
  cosmosSender: string;
  validator: string;
  operationType: string;
}
/** MsgUpdateWhiteListValidator add or remove validator from whitelist */
export interface MsgUpdateWhiteListValidatorSDKType {
  cosmos_sender: string;
  validator: string;
  operation_type: string;
}
export interface MsgUpdateWhiteListValidatorResponse {}
export interface MsgUpdateWhiteListValidatorResponseSDKType {}
export interface MsgUpdateCethReceiverAccount {
  cosmosSender: string;
  cethReceiverAccount: string;
}
export interface MsgUpdateCethReceiverAccountSDKType {
  cosmos_sender: string;
  ceth_receiver_account: string;
}
export interface MsgUpdateCethReceiverAccountResponse {}
export interface MsgUpdateCethReceiverAccountResponseSDKType {}
export interface MsgRescueCeth {
  cosmosSender: string;
  cosmosReceiver: string;
  cethAmount: string;
}
export interface MsgRescueCethSDKType {
  cosmos_sender: string;
  cosmos_receiver: string;
  ceth_amount: string;
}
export interface MsgRescueCethResponse {}
export interface MsgRescueCethResponseSDKType {}
export interface MsgSetBlacklist {
  from: string;
  addresses: string[];
}
export interface MsgSetBlacklistSDKType {
  from: string;
  addresses: string[];
}
export interface MsgSetBlacklistResponse {}
export interface MsgSetBlacklistResponseSDKType {}
function createBaseMsgPause(): MsgPause {
  return {
    signer: "",
    isPaused: false
  };
}
export const MsgPause = {
  encode(message: MsgPause, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.signer !== "") {
      writer.uint32(10).string(message.signer);
    }
    if (message.isPaused === true) {
      writer.uint32(16).bool(message.isPaused);
    }
    return writer;
  },
  fromJSON(object: any): MsgPause {
    return {
      signer: isSet(object.signer) ? String(object.signer) : "",
      isPaused: isSet(object.isPaused) ? Boolean(object.isPaused) : false
    };
  },
  fromPartial(object: Partial<MsgPause>): MsgPause {
    const message = createBaseMsgPause();
    message.signer = object.signer ?? "";
    message.isPaused = object.isPaused ?? false;
    return message;
  }
};
function createBaseMsgPauseResponse(): MsgPauseResponse {
  return {};
}
export const MsgPauseResponse = {
  encode(_: MsgPauseResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },
  fromJSON(_: any): MsgPauseResponse {
    return {};
  },
  fromPartial(_: Partial<MsgPauseResponse>): MsgPauseResponse {
    const message = createBaseMsgPauseResponse();
    return message;
  }
};
function createBaseMsgLock(): MsgLock {
  return {
    cosmosSender: "",
    amount: "",
    symbol: "",
    ethereumChainId: Long.ZERO,
    ethereumReceiver: "",
    cethAmount: ""
  };
}
export const MsgLock = {
  encode(message: MsgLock, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.cosmosSender !== "") {
      writer.uint32(10).string(message.cosmosSender);
    }
    if (message.amount !== "") {
      writer.uint32(18).string(message.amount);
    }
    if (message.symbol !== "") {
      writer.uint32(26).string(message.symbol);
    }
    if (!message.ethereumChainId.isZero()) {
      writer.uint32(32).int64(message.ethereumChainId);
    }
    if (message.ethereumReceiver !== "") {
      writer.uint32(42).string(message.ethereumReceiver);
    }
    if (message.cethAmount !== "") {
      writer.uint32(50).string(message.cethAmount);
    }
    return writer;
  },
  fromJSON(object: any): MsgLock {
    return {
      cosmosSender: isSet(object.cosmosSender) ? String(object.cosmosSender) : "",
      amount: isSet(object.amount) ? String(object.amount) : "",
      symbol: isSet(object.symbol) ? String(object.symbol) : "",
      ethereumChainId: isSet(object.ethereumChainId) ? Long.fromValue(object.ethereumChainId) : Long.ZERO,
      ethereumReceiver: isSet(object.ethereumReceiver) ? String(object.ethereumReceiver) : "",
      cethAmount: isSet(object.cethAmount) ? String(object.cethAmount) : ""
    };
  },
  fromPartial(object: Partial<MsgLock>): MsgLock {
    const message = createBaseMsgLock();
    message.cosmosSender = object.cosmosSender ?? "";
    message.amount = object.amount ?? "";
    message.symbol = object.symbol ?? "";
    message.ethereumChainId = object.ethereumChainId !== undefined && object.ethereumChainId !== null ? Long.fromValue(object.ethereumChainId) : Long.ZERO;
    message.ethereumReceiver = object.ethereumReceiver ?? "";
    message.cethAmount = object.cethAmount ?? "";
    return message;
  }
};
function createBaseMsgLockResponse(): MsgLockResponse {
  return {};
}
export const MsgLockResponse = {
  encode(_: MsgLockResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },
  fromJSON(_: any): MsgLockResponse {
    return {};
  },
  fromPartial(_: Partial<MsgLockResponse>): MsgLockResponse {
    const message = createBaseMsgLockResponse();
    return message;
  }
};
function createBaseMsgBurn(): MsgBurn {
  return {
    cosmosSender: "",
    amount: "",
    symbol: "",
    ethereumChainId: Long.ZERO,
    ethereumReceiver: "",
    cethAmount: ""
  };
}
export const MsgBurn = {
  encode(message: MsgBurn, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.cosmosSender !== "") {
      writer.uint32(10).string(message.cosmosSender);
    }
    if (message.amount !== "") {
      writer.uint32(18).string(message.amount);
    }
    if (message.symbol !== "") {
      writer.uint32(26).string(message.symbol);
    }
    if (!message.ethereumChainId.isZero()) {
      writer.uint32(32).int64(message.ethereumChainId);
    }
    if (message.ethereumReceiver !== "") {
      writer.uint32(42).string(message.ethereumReceiver);
    }
    if (message.cethAmount !== "") {
      writer.uint32(50).string(message.cethAmount);
    }
    return writer;
  },
  fromJSON(object: any): MsgBurn {
    return {
      cosmosSender: isSet(object.cosmosSender) ? String(object.cosmosSender) : "",
      amount: isSet(object.amount) ? String(object.amount) : "",
      symbol: isSet(object.symbol) ? String(object.symbol) : "",
      ethereumChainId: isSet(object.ethereumChainId) ? Long.fromValue(object.ethereumChainId) : Long.ZERO,
      ethereumReceiver: isSet(object.ethereumReceiver) ? String(object.ethereumReceiver) : "",
      cethAmount: isSet(object.cethAmount) ? String(object.cethAmount) : ""
    };
  },
  fromPartial(object: Partial<MsgBurn>): MsgBurn {
    const message = createBaseMsgBurn();
    message.cosmosSender = object.cosmosSender ?? "";
    message.amount = object.amount ?? "";
    message.symbol = object.symbol ?? "";
    message.ethereumChainId = object.ethereumChainId !== undefined && object.ethereumChainId !== null ? Long.fromValue(object.ethereumChainId) : Long.ZERO;
    message.ethereumReceiver = object.ethereumReceiver ?? "";
    message.cethAmount = object.cethAmount ?? "";
    return message;
  }
};
function createBaseMsgBurnResponse(): MsgBurnResponse {
  return {};
}
export const MsgBurnResponse = {
  encode(_: MsgBurnResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },
  fromJSON(_: any): MsgBurnResponse {
    return {};
  },
  fromPartial(_: Partial<MsgBurnResponse>): MsgBurnResponse {
    const message = createBaseMsgBurnResponse();
    return message;
  }
};
function createBaseMsgCreateEthBridgeClaim(): MsgCreateEthBridgeClaim {
  return {
    ethBridgeClaim: undefined
  };
}
export const MsgCreateEthBridgeClaim = {
  encode(message: MsgCreateEthBridgeClaim, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.ethBridgeClaim !== undefined) {
      EthBridgeClaim.encode(message.ethBridgeClaim, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): MsgCreateEthBridgeClaim {
    return {
      ethBridgeClaim: isSet(object.ethBridgeClaim) ? EthBridgeClaim.fromJSON(object.ethBridgeClaim) : undefined
    };
  },
  fromPartial(object: Partial<MsgCreateEthBridgeClaim>): MsgCreateEthBridgeClaim {
    const message = createBaseMsgCreateEthBridgeClaim();
    message.ethBridgeClaim = object.ethBridgeClaim !== undefined && object.ethBridgeClaim !== null ? EthBridgeClaim.fromPartial(object.ethBridgeClaim) : undefined;
    return message;
  }
};
function createBaseMsgCreateEthBridgeClaimResponse(): MsgCreateEthBridgeClaimResponse {
  return {};
}
export const MsgCreateEthBridgeClaimResponse = {
  encode(_: MsgCreateEthBridgeClaimResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },
  fromJSON(_: any): MsgCreateEthBridgeClaimResponse {
    return {};
  },
  fromPartial(_: Partial<MsgCreateEthBridgeClaimResponse>): MsgCreateEthBridgeClaimResponse {
    const message = createBaseMsgCreateEthBridgeClaimResponse();
    return message;
  }
};
function createBaseMsgUpdateWhiteListValidator(): MsgUpdateWhiteListValidator {
  return {
    cosmosSender: "",
    validator: "",
    operationType: ""
  };
}
export const MsgUpdateWhiteListValidator = {
  encode(message: MsgUpdateWhiteListValidator, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.cosmosSender !== "") {
      writer.uint32(10).string(message.cosmosSender);
    }
    if (message.validator !== "") {
      writer.uint32(18).string(message.validator);
    }
    if (message.operationType !== "") {
      writer.uint32(26).string(message.operationType);
    }
    return writer;
  },
  fromJSON(object: any): MsgUpdateWhiteListValidator {
    return {
      cosmosSender: isSet(object.cosmosSender) ? String(object.cosmosSender) : "",
      validator: isSet(object.validator) ? String(object.validator) : "",
      operationType: isSet(object.operationType) ? String(object.operationType) : ""
    };
  },
  fromPartial(object: Partial<MsgUpdateWhiteListValidator>): MsgUpdateWhiteListValidator {
    const message = createBaseMsgUpdateWhiteListValidator();
    message.cosmosSender = object.cosmosSender ?? "";
    message.validator = object.validator ?? "";
    message.operationType = object.operationType ?? "";
    return message;
  }
};
function createBaseMsgUpdateWhiteListValidatorResponse(): MsgUpdateWhiteListValidatorResponse {
  return {};
}
export const MsgUpdateWhiteListValidatorResponse = {
  encode(_: MsgUpdateWhiteListValidatorResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },
  fromJSON(_: any): MsgUpdateWhiteListValidatorResponse {
    return {};
  },
  fromPartial(_: Partial<MsgUpdateWhiteListValidatorResponse>): MsgUpdateWhiteListValidatorResponse {
    const message = createBaseMsgUpdateWhiteListValidatorResponse();
    return message;
  }
};
function createBaseMsgUpdateCethReceiverAccount(): MsgUpdateCethReceiverAccount {
  return {
    cosmosSender: "",
    cethReceiverAccount: ""
  };
}
export const MsgUpdateCethReceiverAccount = {
  encode(message: MsgUpdateCethReceiverAccount, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.cosmosSender !== "") {
      writer.uint32(10).string(message.cosmosSender);
    }
    if (message.cethReceiverAccount !== "") {
      writer.uint32(18).string(message.cethReceiverAccount);
    }
    return writer;
  },
  fromJSON(object: any): MsgUpdateCethReceiverAccount {
    return {
      cosmosSender: isSet(object.cosmosSender) ? String(object.cosmosSender) : "",
      cethReceiverAccount: isSet(object.cethReceiverAccount) ? String(object.cethReceiverAccount) : ""
    };
  },
  fromPartial(object: Partial<MsgUpdateCethReceiverAccount>): MsgUpdateCethReceiverAccount {
    const message = createBaseMsgUpdateCethReceiverAccount();
    message.cosmosSender = object.cosmosSender ?? "";
    message.cethReceiverAccount = object.cethReceiverAccount ?? "";
    return message;
  }
};
function createBaseMsgUpdateCethReceiverAccountResponse(): MsgUpdateCethReceiverAccountResponse {
  return {};
}
export const MsgUpdateCethReceiverAccountResponse = {
  encode(_: MsgUpdateCethReceiverAccountResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },
  fromJSON(_: any): MsgUpdateCethReceiverAccountResponse {
    return {};
  },
  fromPartial(_: Partial<MsgUpdateCethReceiverAccountResponse>): MsgUpdateCethReceiverAccountResponse {
    const message = createBaseMsgUpdateCethReceiverAccountResponse();
    return message;
  }
};
function createBaseMsgRescueCeth(): MsgRescueCeth {
  return {
    cosmosSender: "",
    cosmosReceiver: "",
    cethAmount: ""
  };
}
export const MsgRescueCeth = {
  encode(message: MsgRescueCeth, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.cosmosSender !== "") {
      writer.uint32(10).string(message.cosmosSender);
    }
    if (message.cosmosReceiver !== "") {
      writer.uint32(18).string(message.cosmosReceiver);
    }
    if (message.cethAmount !== "") {
      writer.uint32(26).string(message.cethAmount);
    }
    return writer;
  },
  fromJSON(object: any): MsgRescueCeth {
    return {
      cosmosSender: isSet(object.cosmosSender) ? String(object.cosmosSender) : "",
      cosmosReceiver: isSet(object.cosmosReceiver) ? String(object.cosmosReceiver) : "",
      cethAmount: isSet(object.cethAmount) ? String(object.cethAmount) : ""
    };
  },
  fromPartial(object: Partial<MsgRescueCeth>): MsgRescueCeth {
    const message = createBaseMsgRescueCeth();
    message.cosmosSender = object.cosmosSender ?? "";
    message.cosmosReceiver = object.cosmosReceiver ?? "";
    message.cethAmount = object.cethAmount ?? "";
    return message;
  }
};
function createBaseMsgRescueCethResponse(): MsgRescueCethResponse {
  return {};
}
export const MsgRescueCethResponse = {
  encode(_: MsgRescueCethResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },
  fromJSON(_: any): MsgRescueCethResponse {
    return {};
  },
  fromPartial(_: Partial<MsgRescueCethResponse>): MsgRescueCethResponse {
    const message = createBaseMsgRescueCethResponse();
    return message;
  }
};
function createBaseMsgSetBlacklist(): MsgSetBlacklist {
  return {
    from: "",
    addresses: []
  };
}
export const MsgSetBlacklist = {
  encode(message: MsgSetBlacklist, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.from !== "") {
      writer.uint32(10).string(message.from);
    }
    for (const v of message.addresses) {
      writer.uint32(18).string(v!);
    }
    return writer;
  },
  fromJSON(object: any): MsgSetBlacklist {
    return {
      from: isSet(object.from) ? String(object.from) : "",
      addresses: Array.isArray(object?.addresses) ? object.addresses.map((e: any) => String(e)) : []
    };
  },
  fromPartial(object: Partial<MsgSetBlacklist>): MsgSetBlacklist {
    const message = createBaseMsgSetBlacklist();
    message.from = object.from ?? "";
    message.addresses = object.addresses?.map(e => e) || [];
    return message;
  }
};
function createBaseMsgSetBlacklistResponse(): MsgSetBlacklistResponse {
  return {};
}
export const MsgSetBlacklistResponse = {
  encode(_: MsgSetBlacklistResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },
  fromJSON(_: any): MsgSetBlacklistResponse {
    return {};
  },
  fromPartial(_: Partial<MsgSetBlacklistResponse>): MsgSetBlacklistResponse {
    const message = createBaseMsgSetBlacklistResponse();
    return message;
  }
};