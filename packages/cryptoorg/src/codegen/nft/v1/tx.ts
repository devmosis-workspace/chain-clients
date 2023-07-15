import * as _m0 from "protobufjs/minimal";
import { isSet } from "../../helpers";
/** MsgIssueDenom defines an SDK message for creating a new denom. */
export interface MsgIssueDenom {
  id: string;
  name: string;
  schema: string;
  sender: string;
  uri: string;
}
/** MsgIssueDenom defines an SDK message for creating a new denom. */
export interface MsgIssueDenomSDKType {
  id: string;
  name: string;
  schema: string;
  sender: string;
  uri: string;
}
/** MsgIssueDenomResponse defines the Msg/IssueDenom response type. */
export interface MsgIssueDenomResponse {}
/** MsgIssueDenomResponse defines the Msg/IssueDenom response type. */
export interface MsgIssueDenomResponseSDKType {}
/** MsgTransferNFT defines an SDK message for transferring an NFT to recipient. */
export interface MsgTransferNFT {
  id: string;
  denomId: string;
  sender: string;
  recipient: string;
}
/** MsgTransferNFT defines an SDK message for transferring an NFT to recipient. */
export interface MsgTransferNFTSDKType {
  id: string;
  denom_id: string;
  sender: string;
  recipient: string;
}
/** MsgTransferNFTResponse defines the Msg/TransferNFT response type. */
export interface MsgTransferNFTResponse {}
/** MsgTransferNFTResponse defines the Msg/TransferNFT response type. */
export interface MsgTransferNFTResponseSDKType {}
/** MsgEditNFT defines an SDK message for editing a nft. */
export interface MsgEditNFT {
  id: string;
  denomId: string;
  name: string;
  uri: string;
  data: string;
  sender: string;
}
/** MsgEditNFT defines an SDK message for editing a nft. */
export interface MsgEditNFTSDKType {
  id: string;
  denom_id: string;
  name: string;
  uri: string;
  data: string;
  sender: string;
}
/** MsgEditNFTResponse defines the Msg/EditNFT response type. */
export interface MsgEditNFTResponse {}
/** MsgEditNFTResponse defines the Msg/EditNFT response type. */
export interface MsgEditNFTResponseSDKType {}
/** MsgMintNFT defines an SDK message for creating a new NFT. */
export interface MsgMintNFT {
  id: string;
  denomId: string;
  name: string;
  uri: string;
  data: string;
  sender: string;
  recipient: string;
}
/** MsgMintNFT defines an SDK message for creating a new NFT. */
export interface MsgMintNFTSDKType {
  id: string;
  denom_id: string;
  name: string;
  uri: string;
  data: string;
  sender: string;
  recipient: string;
}
/** MsgMintNFTResponse defines the Msg/MintNFT response type. */
export interface MsgMintNFTResponse {}
/** MsgMintNFTResponse defines the Msg/MintNFT response type. */
export interface MsgMintNFTResponseSDKType {}
/** MsgBurnNFT defines an SDK message for burning a NFT. */
export interface MsgBurnNFT {
  id: string;
  denomId: string;
  sender: string;
}
/** MsgBurnNFT defines an SDK message for burning a NFT. */
export interface MsgBurnNFTSDKType {
  id: string;
  denom_id: string;
  sender: string;
}
/** MsgBurnNFTResponse defines the Msg/BurnNFT response type. */
export interface MsgBurnNFTResponse {}
/** MsgBurnNFTResponse defines the Msg/BurnNFT response type. */
export interface MsgBurnNFTResponseSDKType {}
function createBaseMsgIssueDenom(): MsgIssueDenom {
  return {
    id: "",
    name: "",
    schema: "",
    sender: "",
    uri: ""
  };
}
export const MsgIssueDenom = {
  encode(message: MsgIssueDenom, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.id !== "") {
      writer.uint32(10).string(message.id);
    }
    if (message.name !== "") {
      writer.uint32(18).string(message.name);
    }
    if (message.schema !== "") {
      writer.uint32(26).string(message.schema);
    }
    if (message.sender !== "") {
      writer.uint32(34).string(message.sender);
    }
    if (message.uri !== "") {
      writer.uint32(42).string(message.uri);
    }
    return writer;
  },
  fromJSON(object: any): MsgIssueDenom {
    return {
      id: isSet(object.id) ? String(object.id) : "",
      name: isSet(object.name) ? String(object.name) : "",
      schema: isSet(object.schema) ? String(object.schema) : "",
      sender: isSet(object.sender) ? String(object.sender) : "",
      uri: isSet(object.uri) ? String(object.uri) : ""
    };
  },
  fromPartial(object: Partial<MsgIssueDenom>): MsgIssueDenom {
    const message = createBaseMsgIssueDenom();
    message.id = object.id ?? "";
    message.name = object.name ?? "";
    message.schema = object.schema ?? "";
    message.sender = object.sender ?? "";
    message.uri = object.uri ?? "";
    return message;
  }
};
function createBaseMsgIssueDenomResponse(): MsgIssueDenomResponse {
  return {};
}
export const MsgIssueDenomResponse = {
  encode(_: MsgIssueDenomResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },
  fromJSON(_: any): MsgIssueDenomResponse {
    return {};
  },
  fromPartial(_: Partial<MsgIssueDenomResponse>): MsgIssueDenomResponse {
    const message = createBaseMsgIssueDenomResponse();
    return message;
  }
};
function createBaseMsgTransferNFT(): MsgTransferNFT {
  return {
    id: "",
    denomId: "",
    sender: "",
    recipient: ""
  };
}
export const MsgTransferNFT = {
  encode(message: MsgTransferNFT, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.id !== "") {
      writer.uint32(10).string(message.id);
    }
    if (message.denomId !== "") {
      writer.uint32(18).string(message.denomId);
    }
    if (message.sender !== "") {
      writer.uint32(26).string(message.sender);
    }
    if (message.recipient !== "") {
      writer.uint32(34).string(message.recipient);
    }
    return writer;
  },
  fromJSON(object: any): MsgTransferNFT {
    return {
      id: isSet(object.id) ? String(object.id) : "",
      denomId: isSet(object.denomId) ? String(object.denomId) : "",
      sender: isSet(object.sender) ? String(object.sender) : "",
      recipient: isSet(object.recipient) ? String(object.recipient) : ""
    };
  },
  fromPartial(object: Partial<MsgTransferNFT>): MsgTransferNFT {
    const message = createBaseMsgTransferNFT();
    message.id = object.id ?? "";
    message.denomId = object.denomId ?? "";
    message.sender = object.sender ?? "";
    message.recipient = object.recipient ?? "";
    return message;
  }
};
function createBaseMsgTransferNFTResponse(): MsgTransferNFTResponse {
  return {};
}
export const MsgTransferNFTResponse = {
  encode(_: MsgTransferNFTResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },
  fromJSON(_: any): MsgTransferNFTResponse {
    return {};
  },
  fromPartial(_: Partial<MsgTransferNFTResponse>): MsgTransferNFTResponse {
    const message = createBaseMsgTransferNFTResponse();
    return message;
  }
};
function createBaseMsgEditNFT(): MsgEditNFT {
  return {
    id: "",
    denomId: "",
    name: "",
    uri: "",
    data: "",
    sender: ""
  };
}
export const MsgEditNFT = {
  encode(message: MsgEditNFT, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.id !== "") {
      writer.uint32(10).string(message.id);
    }
    if (message.denomId !== "") {
      writer.uint32(18).string(message.denomId);
    }
    if (message.name !== "") {
      writer.uint32(26).string(message.name);
    }
    if (message.uri !== "") {
      writer.uint32(34).string(message.uri);
    }
    if (message.data !== "") {
      writer.uint32(42).string(message.data);
    }
    if (message.sender !== "") {
      writer.uint32(50).string(message.sender);
    }
    return writer;
  },
  fromJSON(object: any): MsgEditNFT {
    return {
      id: isSet(object.id) ? String(object.id) : "",
      denomId: isSet(object.denomId) ? String(object.denomId) : "",
      name: isSet(object.name) ? String(object.name) : "",
      uri: isSet(object.uri) ? String(object.uri) : "",
      data: isSet(object.data) ? String(object.data) : "",
      sender: isSet(object.sender) ? String(object.sender) : ""
    };
  },
  fromPartial(object: Partial<MsgEditNFT>): MsgEditNFT {
    const message = createBaseMsgEditNFT();
    message.id = object.id ?? "";
    message.denomId = object.denomId ?? "";
    message.name = object.name ?? "";
    message.uri = object.uri ?? "";
    message.data = object.data ?? "";
    message.sender = object.sender ?? "";
    return message;
  }
};
function createBaseMsgEditNFTResponse(): MsgEditNFTResponse {
  return {};
}
export const MsgEditNFTResponse = {
  encode(_: MsgEditNFTResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },
  fromJSON(_: any): MsgEditNFTResponse {
    return {};
  },
  fromPartial(_: Partial<MsgEditNFTResponse>): MsgEditNFTResponse {
    const message = createBaseMsgEditNFTResponse();
    return message;
  }
};
function createBaseMsgMintNFT(): MsgMintNFT {
  return {
    id: "",
    denomId: "",
    name: "",
    uri: "",
    data: "",
    sender: "",
    recipient: ""
  };
}
export const MsgMintNFT = {
  encode(message: MsgMintNFT, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.id !== "") {
      writer.uint32(10).string(message.id);
    }
    if (message.denomId !== "") {
      writer.uint32(18).string(message.denomId);
    }
    if (message.name !== "") {
      writer.uint32(26).string(message.name);
    }
    if (message.uri !== "") {
      writer.uint32(34).string(message.uri);
    }
    if (message.data !== "") {
      writer.uint32(42).string(message.data);
    }
    if (message.sender !== "") {
      writer.uint32(50).string(message.sender);
    }
    if (message.recipient !== "") {
      writer.uint32(58).string(message.recipient);
    }
    return writer;
  },
  fromJSON(object: any): MsgMintNFT {
    return {
      id: isSet(object.id) ? String(object.id) : "",
      denomId: isSet(object.denomId) ? String(object.denomId) : "",
      name: isSet(object.name) ? String(object.name) : "",
      uri: isSet(object.uri) ? String(object.uri) : "",
      data: isSet(object.data) ? String(object.data) : "",
      sender: isSet(object.sender) ? String(object.sender) : "",
      recipient: isSet(object.recipient) ? String(object.recipient) : ""
    };
  },
  fromPartial(object: Partial<MsgMintNFT>): MsgMintNFT {
    const message = createBaseMsgMintNFT();
    message.id = object.id ?? "";
    message.denomId = object.denomId ?? "";
    message.name = object.name ?? "";
    message.uri = object.uri ?? "";
    message.data = object.data ?? "";
    message.sender = object.sender ?? "";
    message.recipient = object.recipient ?? "";
    return message;
  }
};
function createBaseMsgMintNFTResponse(): MsgMintNFTResponse {
  return {};
}
export const MsgMintNFTResponse = {
  encode(_: MsgMintNFTResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },
  fromJSON(_: any): MsgMintNFTResponse {
    return {};
  },
  fromPartial(_: Partial<MsgMintNFTResponse>): MsgMintNFTResponse {
    const message = createBaseMsgMintNFTResponse();
    return message;
  }
};
function createBaseMsgBurnNFT(): MsgBurnNFT {
  return {
    id: "",
    denomId: "",
    sender: ""
  };
}
export const MsgBurnNFT = {
  encode(message: MsgBurnNFT, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.id !== "") {
      writer.uint32(10).string(message.id);
    }
    if (message.denomId !== "") {
      writer.uint32(18).string(message.denomId);
    }
    if (message.sender !== "") {
      writer.uint32(26).string(message.sender);
    }
    return writer;
  },
  fromJSON(object: any): MsgBurnNFT {
    return {
      id: isSet(object.id) ? String(object.id) : "",
      denomId: isSet(object.denomId) ? String(object.denomId) : "",
      sender: isSet(object.sender) ? String(object.sender) : ""
    };
  },
  fromPartial(object: Partial<MsgBurnNFT>): MsgBurnNFT {
    const message = createBaseMsgBurnNFT();
    message.id = object.id ?? "";
    message.denomId = object.denomId ?? "";
    message.sender = object.sender ?? "";
    return message;
  }
};
function createBaseMsgBurnNFTResponse(): MsgBurnNFTResponse {
  return {};
}
export const MsgBurnNFTResponse = {
  encode(_: MsgBurnNFTResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },
  fromJSON(_: any): MsgBurnNFTResponse {
    return {};
  },
  fromPartial(_: Partial<MsgBurnNFTResponse>): MsgBurnNFTResponse {
    const message = createBaseMsgBurnNFTResponse();
    return message;
  }
};