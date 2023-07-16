import { Coin, CoinSDKType } from "../cosmos/base/v1beta1/coin";
import * as _m0 from "protobufjs/minimal";
import { isSet } from "../helpers";
export interface MsgUpdateMasterMinter {
  from: string;
  address: string;
}
export interface MsgUpdateMasterMinterSDKType {
  from: string;
  address: string;
}
export interface MsgUpdateMasterMinterResponse {}
export interface MsgUpdateMasterMinterResponseSDKType {}
export interface MsgUpdatePauser {
  from: string;
  address: string;
}
export interface MsgUpdatePauserSDKType {
  from: string;
  address: string;
}
export interface MsgUpdatePauserResponse {}
export interface MsgUpdatePauserResponseSDKType {}
export interface MsgUpdateBlacklister {
  from: string;
  address: string;
}
export interface MsgUpdateBlacklisterSDKType {
  from: string;
  address: string;
}
export interface MsgUpdateBlacklisterResponse {}
export interface MsgUpdateBlacklisterResponseSDKType {}
export interface MsgUpdateOwner {
  from: string;
  address: string;
}
export interface MsgUpdateOwnerSDKType {
  from: string;
  address: string;
}
export interface MsgUpdateOwnerResponse {}
export interface MsgUpdateOwnerResponseSDKType {}
export interface MsgAcceptOwner {
  from: string;
}
export interface MsgAcceptOwnerSDKType {
  from: string;
}
export interface MsgAcceptOwnerResponse {}
export interface MsgAcceptOwnerResponseSDKType {}
export interface MsgConfigureMinter {
  from: string;
  address: string;
  allowance?: Coin;
}
export interface MsgConfigureMinterSDKType {
  from: string;
  address: string;
  allowance?: CoinSDKType;
}
export interface MsgConfigureMinterResponse {}
export interface MsgConfigureMinterResponseSDKType {}
export interface MsgRemoveMinter {
  from: string;
  address: string;
}
export interface MsgRemoveMinterSDKType {
  from: string;
  address: string;
}
export interface MsgRemoveMinterResponse {}
export interface MsgRemoveMinterResponseSDKType {}
export interface MsgMint {
  from: string;
  address: string;
  amount?: Coin;
}
export interface MsgMintSDKType {
  from: string;
  address: string;
  amount?: CoinSDKType;
}
export interface MsgMintResponse {}
export interface MsgMintResponseSDKType {}
export interface MsgBurn {
  from: string;
  amount?: Coin;
}
export interface MsgBurnSDKType {
  from: string;
  amount?: CoinSDKType;
}
export interface MsgBurnResponse {}
export interface MsgBurnResponseSDKType {}
export interface MsgBlacklist {
  from: string;
  address: string;
}
export interface MsgBlacklistSDKType {
  from: string;
  address: string;
}
export interface MsgBlacklistResponse {}
export interface MsgBlacklistResponseSDKType {}
export interface MsgUnblacklist {
  from: string;
  address: string;
}
export interface MsgUnblacklistSDKType {
  from: string;
  address: string;
}
export interface MsgUnblacklistResponse {}
export interface MsgUnblacklistResponseSDKType {}
export interface MsgPause {
  from: string;
}
export interface MsgPauseSDKType {
  from: string;
}
export interface MsgPauseResponse {}
export interface MsgPauseResponseSDKType {}
export interface MsgUnpause {
  from: string;
}
export interface MsgUnpauseSDKType {
  from: string;
}
export interface MsgUnpauseResponse {}
export interface MsgUnpauseResponseSDKType {}
export interface MsgConfigureMinterController {
  from: string;
  controller: string;
  minter: string;
}
export interface MsgConfigureMinterControllerSDKType {
  from: string;
  controller: string;
  minter: string;
}
export interface MsgConfigureMinterControllerResponse {}
export interface MsgConfigureMinterControllerResponseSDKType {}
export interface MsgRemoveMinterController {
  from: string;
  controller: string;
}
export interface MsgRemoveMinterControllerSDKType {
  from: string;
  controller: string;
}
export interface MsgRemoveMinterControllerResponse {}
export interface MsgRemoveMinterControllerResponseSDKType {}
function createBaseMsgUpdateMasterMinter(): MsgUpdateMasterMinter {
  return {
    from: "",
    address: ""
  };
}
export const MsgUpdateMasterMinter = {
  encode(message: MsgUpdateMasterMinter, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.from !== "") {
      writer.uint32(10).string(message.from);
    }
    if (message.address !== "") {
      writer.uint32(18).string(message.address);
    }
    return writer;
  },
  fromJSON(object: any): MsgUpdateMasterMinter {
    return {
      from: isSet(object.from) ? String(object.from) : "",
      address: isSet(object.address) ? String(object.address) : ""
    };
  },
  fromPartial(object: Partial<MsgUpdateMasterMinter>): MsgUpdateMasterMinter {
    const message = createBaseMsgUpdateMasterMinter();
    message.from = object.from ?? "";
    message.address = object.address ?? "";
    return message;
  }
};
function createBaseMsgUpdateMasterMinterResponse(): MsgUpdateMasterMinterResponse {
  return {};
}
export const MsgUpdateMasterMinterResponse = {
  encode(_: MsgUpdateMasterMinterResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },
  fromJSON(_: any): MsgUpdateMasterMinterResponse {
    return {};
  },
  fromPartial(_: Partial<MsgUpdateMasterMinterResponse>): MsgUpdateMasterMinterResponse {
    const message = createBaseMsgUpdateMasterMinterResponse();
    return message;
  }
};
function createBaseMsgUpdatePauser(): MsgUpdatePauser {
  return {
    from: "",
    address: ""
  };
}
export const MsgUpdatePauser = {
  encode(message: MsgUpdatePauser, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.from !== "") {
      writer.uint32(10).string(message.from);
    }
    if (message.address !== "") {
      writer.uint32(18).string(message.address);
    }
    return writer;
  },
  fromJSON(object: any): MsgUpdatePauser {
    return {
      from: isSet(object.from) ? String(object.from) : "",
      address: isSet(object.address) ? String(object.address) : ""
    };
  },
  fromPartial(object: Partial<MsgUpdatePauser>): MsgUpdatePauser {
    const message = createBaseMsgUpdatePauser();
    message.from = object.from ?? "";
    message.address = object.address ?? "";
    return message;
  }
};
function createBaseMsgUpdatePauserResponse(): MsgUpdatePauserResponse {
  return {};
}
export const MsgUpdatePauserResponse = {
  encode(_: MsgUpdatePauserResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },
  fromJSON(_: any): MsgUpdatePauserResponse {
    return {};
  },
  fromPartial(_: Partial<MsgUpdatePauserResponse>): MsgUpdatePauserResponse {
    const message = createBaseMsgUpdatePauserResponse();
    return message;
  }
};
function createBaseMsgUpdateBlacklister(): MsgUpdateBlacklister {
  return {
    from: "",
    address: ""
  };
}
export const MsgUpdateBlacklister = {
  encode(message: MsgUpdateBlacklister, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.from !== "") {
      writer.uint32(10).string(message.from);
    }
    if (message.address !== "") {
      writer.uint32(18).string(message.address);
    }
    return writer;
  },
  fromJSON(object: any): MsgUpdateBlacklister {
    return {
      from: isSet(object.from) ? String(object.from) : "",
      address: isSet(object.address) ? String(object.address) : ""
    };
  },
  fromPartial(object: Partial<MsgUpdateBlacklister>): MsgUpdateBlacklister {
    const message = createBaseMsgUpdateBlacklister();
    message.from = object.from ?? "";
    message.address = object.address ?? "";
    return message;
  }
};
function createBaseMsgUpdateBlacklisterResponse(): MsgUpdateBlacklisterResponse {
  return {};
}
export const MsgUpdateBlacklisterResponse = {
  encode(_: MsgUpdateBlacklisterResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },
  fromJSON(_: any): MsgUpdateBlacklisterResponse {
    return {};
  },
  fromPartial(_: Partial<MsgUpdateBlacklisterResponse>): MsgUpdateBlacklisterResponse {
    const message = createBaseMsgUpdateBlacklisterResponse();
    return message;
  }
};
function createBaseMsgUpdateOwner(): MsgUpdateOwner {
  return {
    from: "",
    address: ""
  };
}
export const MsgUpdateOwner = {
  encode(message: MsgUpdateOwner, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.from !== "") {
      writer.uint32(10).string(message.from);
    }
    if (message.address !== "") {
      writer.uint32(18).string(message.address);
    }
    return writer;
  },
  fromJSON(object: any): MsgUpdateOwner {
    return {
      from: isSet(object.from) ? String(object.from) : "",
      address: isSet(object.address) ? String(object.address) : ""
    };
  },
  fromPartial(object: Partial<MsgUpdateOwner>): MsgUpdateOwner {
    const message = createBaseMsgUpdateOwner();
    message.from = object.from ?? "";
    message.address = object.address ?? "";
    return message;
  }
};
function createBaseMsgUpdateOwnerResponse(): MsgUpdateOwnerResponse {
  return {};
}
export const MsgUpdateOwnerResponse = {
  encode(_: MsgUpdateOwnerResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },
  fromJSON(_: any): MsgUpdateOwnerResponse {
    return {};
  },
  fromPartial(_: Partial<MsgUpdateOwnerResponse>): MsgUpdateOwnerResponse {
    const message = createBaseMsgUpdateOwnerResponse();
    return message;
  }
};
function createBaseMsgAcceptOwner(): MsgAcceptOwner {
  return {
    from: ""
  };
}
export const MsgAcceptOwner = {
  encode(message: MsgAcceptOwner, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.from !== "") {
      writer.uint32(10).string(message.from);
    }
    return writer;
  },
  fromJSON(object: any): MsgAcceptOwner {
    return {
      from: isSet(object.from) ? String(object.from) : ""
    };
  },
  fromPartial(object: Partial<MsgAcceptOwner>): MsgAcceptOwner {
    const message = createBaseMsgAcceptOwner();
    message.from = object.from ?? "";
    return message;
  }
};
function createBaseMsgAcceptOwnerResponse(): MsgAcceptOwnerResponse {
  return {};
}
export const MsgAcceptOwnerResponse = {
  encode(_: MsgAcceptOwnerResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },
  fromJSON(_: any): MsgAcceptOwnerResponse {
    return {};
  },
  fromPartial(_: Partial<MsgAcceptOwnerResponse>): MsgAcceptOwnerResponse {
    const message = createBaseMsgAcceptOwnerResponse();
    return message;
  }
};
function createBaseMsgConfigureMinter(): MsgConfigureMinter {
  return {
    from: "",
    address: "",
    allowance: undefined
  };
}
export const MsgConfigureMinter = {
  encode(message: MsgConfigureMinter, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.from !== "") {
      writer.uint32(10).string(message.from);
    }
    if (message.address !== "") {
      writer.uint32(18).string(message.address);
    }
    if (message.allowance !== undefined) {
      Coin.encode(message.allowance, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): MsgConfigureMinter {
    return {
      from: isSet(object.from) ? String(object.from) : "",
      address: isSet(object.address) ? String(object.address) : "",
      allowance: isSet(object.allowance) ? Coin.fromJSON(object.allowance) : undefined
    };
  },
  fromPartial(object: Partial<MsgConfigureMinter>): MsgConfigureMinter {
    const message = createBaseMsgConfigureMinter();
    message.from = object.from ?? "";
    message.address = object.address ?? "";
    message.allowance = object.allowance !== undefined && object.allowance !== null ? Coin.fromPartial(object.allowance) : undefined;
    return message;
  }
};
function createBaseMsgConfigureMinterResponse(): MsgConfigureMinterResponse {
  return {};
}
export const MsgConfigureMinterResponse = {
  encode(_: MsgConfigureMinterResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },
  fromJSON(_: any): MsgConfigureMinterResponse {
    return {};
  },
  fromPartial(_: Partial<MsgConfigureMinterResponse>): MsgConfigureMinterResponse {
    const message = createBaseMsgConfigureMinterResponse();
    return message;
  }
};
function createBaseMsgRemoveMinter(): MsgRemoveMinter {
  return {
    from: "",
    address: ""
  };
}
export const MsgRemoveMinter = {
  encode(message: MsgRemoveMinter, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.from !== "") {
      writer.uint32(10).string(message.from);
    }
    if (message.address !== "") {
      writer.uint32(18).string(message.address);
    }
    return writer;
  },
  fromJSON(object: any): MsgRemoveMinter {
    return {
      from: isSet(object.from) ? String(object.from) : "",
      address: isSet(object.address) ? String(object.address) : ""
    };
  },
  fromPartial(object: Partial<MsgRemoveMinter>): MsgRemoveMinter {
    const message = createBaseMsgRemoveMinter();
    message.from = object.from ?? "";
    message.address = object.address ?? "";
    return message;
  }
};
function createBaseMsgRemoveMinterResponse(): MsgRemoveMinterResponse {
  return {};
}
export const MsgRemoveMinterResponse = {
  encode(_: MsgRemoveMinterResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },
  fromJSON(_: any): MsgRemoveMinterResponse {
    return {};
  },
  fromPartial(_: Partial<MsgRemoveMinterResponse>): MsgRemoveMinterResponse {
    const message = createBaseMsgRemoveMinterResponse();
    return message;
  }
};
function createBaseMsgMint(): MsgMint {
  return {
    from: "",
    address: "",
    amount: undefined
  };
}
export const MsgMint = {
  encode(message: MsgMint, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.from !== "") {
      writer.uint32(10).string(message.from);
    }
    if (message.address !== "") {
      writer.uint32(18).string(message.address);
    }
    if (message.amount !== undefined) {
      Coin.encode(message.amount, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): MsgMint {
    return {
      from: isSet(object.from) ? String(object.from) : "",
      address: isSet(object.address) ? String(object.address) : "",
      amount: isSet(object.amount) ? Coin.fromJSON(object.amount) : undefined
    };
  },
  fromPartial(object: Partial<MsgMint>): MsgMint {
    const message = createBaseMsgMint();
    message.from = object.from ?? "";
    message.address = object.address ?? "";
    message.amount = object.amount !== undefined && object.amount !== null ? Coin.fromPartial(object.amount) : undefined;
    return message;
  }
};
function createBaseMsgMintResponse(): MsgMintResponse {
  return {};
}
export const MsgMintResponse = {
  encode(_: MsgMintResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },
  fromJSON(_: any): MsgMintResponse {
    return {};
  },
  fromPartial(_: Partial<MsgMintResponse>): MsgMintResponse {
    const message = createBaseMsgMintResponse();
    return message;
  }
};
function createBaseMsgBurn(): MsgBurn {
  return {
    from: "",
    amount: undefined
  };
}
export const MsgBurn = {
  encode(message: MsgBurn, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.from !== "") {
      writer.uint32(10).string(message.from);
    }
    if (message.amount !== undefined) {
      Coin.encode(message.amount, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): MsgBurn {
    return {
      from: isSet(object.from) ? String(object.from) : "",
      amount: isSet(object.amount) ? Coin.fromJSON(object.amount) : undefined
    };
  },
  fromPartial(object: Partial<MsgBurn>): MsgBurn {
    const message = createBaseMsgBurn();
    message.from = object.from ?? "";
    message.amount = object.amount !== undefined && object.amount !== null ? Coin.fromPartial(object.amount) : undefined;
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
function createBaseMsgBlacklist(): MsgBlacklist {
  return {
    from: "",
    address: ""
  };
}
export const MsgBlacklist = {
  encode(message: MsgBlacklist, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.from !== "") {
      writer.uint32(10).string(message.from);
    }
    if (message.address !== "") {
      writer.uint32(18).string(message.address);
    }
    return writer;
  },
  fromJSON(object: any): MsgBlacklist {
    return {
      from: isSet(object.from) ? String(object.from) : "",
      address: isSet(object.address) ? String(object.address) : ""
    };
  },
  fromPartial(object: Partial<MsgBlacklist>): MsgBlacklist {
    const message = createBaseMsgBlacklist();
    message.from = object.from ?? "";
    message.address = object.address ?? "";
    return message;
  }
};
function createBaseMsgBlacklistResponse(): MsgBlacklistResponse {
  return {};
}
export const MsgBlacklistResponse = {
  encode(_: MsgBlacklistResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },
  fromJSON(_: any): MsgBlacklistResponse {
    return {};
  },
  fromPartial(_: Partial<MsgBlacklistResponse>): MsgBlacklistResponse {
    const message = createBaseMsgBlacklistResponse();
    return message;
  }
};
function createBaseMsgUnblacklist(): MsgUnblacklist {
  return {
    from: "",
    address: ""
  };
}
export const MsgUnblacklist = {
  encode(message: MsgUnblacklist, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.from !== "") {
      writer.uint32(10).string(message.from);
    }
    if (message.address !== "") {
      writer.uint32(18).string(message.address);
    }
    return writer;
  },
  fromJSON(object: any): MsgUnblacklist {
    return {
      from: isSet(object.from) ? String(object.from) : "",
      address: isSet(object.address) ? String(object.address) : ""
    };
  },
  fromPartial(object: Partial<MsgUnblacklist>): MsgUnblacklist {
    const message = createBaseMsgUnblacklist();
    message.from = object.from ?? "";
    message.address = object.address ?? "";
    return message;
  }
};
function createBaseMsgUnblacklistResponse(): MsgUnblacklistResponse {
  return {};
}
export const MsgUnblacklistResponse = {
  encode(_: MsgUnblacklistResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },
  fromJSON(_: any): MsgUnblacklistResponse {
    return {};
  },
  fromPartial(_: Partial<MsgUnblacklistResponse>): MsgUnblacklistResponse {
    const message = createBaseMsgUnblacklistResponse();
    return message;
  }
};
function createBaseMsgPause(): MsgPause {
  return {
    from: ""
  };
}
export const MsgPause = {
  encode(message: MsgPause, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.from !== "") {
      writer.uint32(10).string(message.from);
    }
    return writer;
  },
  fromJSON(object: any): MsgPause {
    return {
      from: isSet(object.from) ? String(object.from) : ""
    };
  },
  fromPartial(object: Partial<MsgPause>): MsgPause {
    const message = createBaseMsgPause();
    message.from = object.from ?? "";
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
function createBaseMsgUnpause(): MsgUnpause {
  return {
    from: ""
  };
}
export const MsgUnpause = {
  encode(message: MsgUnpause, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.from !== "") {
      writer.uint32(10).string(message.from);
    }
    return writer;
  },
  fromJSON(object: any): MsgUnpause {
    return {
      from: isSet(object.from) ? String(object.from) : ""
    };
  },
  fromPartial(object: Partial<MsgUnpause>): MsgUnpause {
    const message = createBaseMsgUnpause();
    message.from = object.from ?? "";
    return message;
  }
};
function createBaseMsgUnpauseResponse(): MsgUnpauseResponse {
  return {};
}
export const MsgUnpauseResponse = {
  encode(_: MsgUnpauseResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },
  fromJSON(_: any): MsgUnpauseResponse {
    return {};
  },
  fromPartial(_: Partial<MsgUnpauseResponse>): MsgUnpauseResponse {
    const message = createBaseMsgUnpauseResponse();
    return message;
  }
};
function createBaseMsgConfigureMinterController(): MsgConfigureMinterController {
  return {
    from: "",
    controller: "",
    minter: ""
  };
}
export const MsgConfigureMinterController = {
  encode(message: MsgConfigureMinterController, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.from !== "") {
      writer.uint32(10).string(message.from);
    }
    if (message.controller !== "") {
      writer.uint32(18).string(message.controller);
    }
    if (message.minter !== "") {
      writer.uint32(26).string(message.minter);
    }
    return writer;
  },
  fromJSON(object: any): MsgConfigureMinterController {
    return {
      from: isSet(object.from) ? String(object.from) : "",
      controller: isSet(object.controller) ? String(object.controller) : "",
      minter: isSet(object.minter) ? String(object.minter) : ""
    };
  },
  fromPartial(object: Partial<MsgConfigureMinterController>): MsgConfigureMinterController {
    const message = createBaseMsgConfigureMinterController();
    message.from = object.from ?? "";
    message.controller = object.controller ?? "";
    message.minter = object.minter ?? "";
    return message;
  }
};
function createBaseMsgConfigureMinterControllerResponse(): MsgConfigureMinterControllerResponse {
  return {};
}
export const MsgConfigureMinterControllerResponse = {
  encode(_: MsgConfigureMinterControllerResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },
  fromJSON(_: any): MsgConfigureMinterControllerResponse {
    return {};
  },
  fromPartial(_: Partial<MsgConfigureMinterControllerResponse>): MsgConfigureMinterControllerResponse {
    const message = createBaseMsgConfigureMinterControllerResponse();
    return message;
  }
};
function createBaseMsgRemoveMinterController(): MsgRemoveMinterController {
  return {
    from: "",
    controller: ""
  };
}
export const MsgRemoveMinterController = {
  encode(message: MsgRemoveMinterController, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.from !== "") {
      writer.uint32(10).string(message.from);
    }
    if (message.controller !== "") {
      writer.uint32(18).string(message.controller);
    }
    return writer;
  },
  fromJSON(object: any): MsgRemoveMinterController {
    return {
      from: isSet(object.from) ? String(object.from) : "",
      controller: isSet(object.controller) ? String(object.controller) : ""
    };
  },
  fromPartial(object: Partial<MsgRemoveMinterController>): MsgRemoveMinterController {
    const message = createBaseMsgRemoveMinterController();
    message.from = object.from ?? "";
    message.controller = object.controller ?? "";
    return message;
  }
};
function createBaseMsgRemoveMinterControllerResponse(): MsgRemoveMinterControllerResponse {
  return {};
}
export const MsgRemoveMinterControllerResponse = {
  encode(_: MsgRemoveMinterControllerResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },
  fromJSON(_: any): MsgRemoveMinterControllerResponse {
    return {};
  },
  fromPartial(_: Partial<MsgRemoveMinterControllerResponse>): MsgRemoveMinterControllerResponse {
    const message = createBaseMsgRemoveMinterControllerResponse();
    return message;
  }
};