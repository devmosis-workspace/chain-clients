import { BinaryWriter } from "../../binary";
import { isSet } from "../../helpers";
/** MsgIssueDenom defines an SDK message for creating a new denom. */
export interface MsgIssueDenom {
  id: string;
  name: string;
  schema: string;
  sender: string;
  uri: string;
}
export interface MsgIssueDenomProtoMsg {
  typeUrl: "/chainmain.nft.v1.MsgIssueDenom";
  value: Uint8Array;
}
/** MsgIssueDenom defines an SDK message for creating a new denom. */
export interface MsgIssueDenomAmino {
  id: string;
  name: string;
  schema: string;
  sender: string;
  uri: string;
}
export interface MsgIssueDenomAminoMsg {
  type: "/chainmain.nft.v1.MsgIssueDenom";
  value: MsgIssueDenomAmino;
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
export interface MsgIssueDenomResponseProtoMsg {
  typeUrl: "/chainmain.nft.v1.MsgIssueDenomResponse";
  value: Uint8Array;
}
/** MsgIssueDenomResponse defines the Msg/IssueDenom response type. */
export interface MsgIssueDenomResponseAmino {}
export interface MsgIssueDenomResponseAminoMsg {
  type: "/chainmain.nft.v1.MsgIssueDenomResponse";
  value: MsgIssueDenomResponseAmino;
}
/** MsgIssueDenomResponse defines the Msg/IssueDenom response type. */
export interface MsgIssueDenomResponseSDKType {}
/** MsgTransferNFT defines an SDK message for transferring an NFT to recipient. */
export interface MsgTransferNFT {
  id: string;
  denomId: string;
  sender: string;
  recipient: string;
}
export interface MsgTransferNFTProtoMsg {
  typeUrl: "/chainmain.nft.v1.MsgTransferNFT";
  value: Uint8Array;
}
/** MsgTransferNFT defines an SDK message for transferring an NFT to recipient. */
export interface MsgTransferNFTAmino {
  id: string;
  denom_id: string;
  sender: string;
  recipient: string;
}
export interface MsgTransferNFTAminoMsg {
  type: "/chainmain.nft.v1.MsgTransferNFT";
  value: MsgTransferNFTAmino;
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
export interface MsgTransferNFTResponseProtoMsg {
  typeUrl: "/chainmain.nft.v1.MsgTransferNFTResponse";
  value: Uint8Array;
}
/** MsgTransferNFTResponse defines the Msg/TransferNFT response type. */
export interface MsgTransferNFTResponseAmino {}
export interface MsgTransferNFTResponseAminoMsg {
  type: "/chainmain.nft.v1.MsgTransferNFTResponse";
  value: MsgTransferNFTResponseAmino;
}
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
export interface MsgEditNFTProtoMsg {
  typeUrl: "/chainmain.nft.v1.MsgEditNFT";
  value: Uint8Array;
}
/** MsgEditNFT defines an SDK message for editing a nft. */
export interface MsgEditNFTAmino {
  id: string;
  denom_id: string;
  name: string;
  uri: string;
  data: string;
  sender: string;
}
export interface MsgEditNFTAminoMsg {
  type: "/chainmain.nft.v1.MsgEditNFT";
  value: MsgEditNFTAmino;
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
export interface MsgEditNFTResponseProtoMsg {
  typeUrl: "/chainmain.nft.v1.MsgEditNFTResponse";
  value: Uint8Array;
}
/** MsgEditNFTResponse defines the Msg/EditNFT response type. */
export interface MsgEditNFTResponseAmino {}
export interface MsgEditNFTResponseAminoMsg {
  type: "/chainmain.nft.v1.MsgEditNFTResponse";
  value: MsgEditNFTResponseAmino;
}
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
export interface MsgMintNFTProtoMsg {
  typeUrl: "/chainmain.nft.v1.MsgMintNFT";
  value: Uint8Array;
}
/** MsgMintNFT defines an SDK message for creating a new NFT. */
export interface MsgMintNFTAmino {
  id: string;
  denom_id: string;
  name: string;
  uri: string;
  data: string;
  sender: string;
  recipient: string;
}
export interface MsgMintNFTAminoMsg {
  type: "/chainmain.nft.v1.MsgMintNFT";
  value: MsgMintNFTAmino;
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
export interface MsgMintNFTResponseProtoMsg {
  typeUrl: "/chainmain.nft.v1.MsgMintNFTResponse";
  value: Uint8Array;
}
/** MsgMintNFTResponse defines the Msg/MintNFT response type. */
export interface MsgMintNFTResponseAmino {}
export interface MsgMintNFTResponseAminoMsg {
  type: "/chainmain.nft.v1.MsgMintNFTResponse";
  value: MsgMintNFTResponseAmino;
}
/** MsgMintNFTResponse defines the Msg/MintNFT response type. */
export interface MsgMintNFTResponseSDKType {}
/** MsgBurnNFT defines an SDK message for burning a NFT. */
export interface MsgBurnNFT {
  id: string;
  denomId: string;
  sender: string;
}
export interface MsgBurnNFTProtoMsg {
  typeUrl: "/chainmain.nft.v1.MsgBurnNFT";
  value: Uint8Array;
}
/** MsgBurnNFT defines an SDK message for burning a NFT. */
export interface MsgBurnNFTAmino {
  id: string;
  denom_id: string;
  sender: string;
}
export interface MsgBurnNFTAminoMsg {
  type: "/chainmain.nft.v1.MsgBurnNFT";
  value: MsgBurnNFTAmino;
}
/** MsgBurnNFT defines an SDK message for burning a NFT. */
export interface MsgBurnNFTSDKType {
  id: string;
  denom_id: string;
  sender: string;
}
/** MsgBurnNFTResponse defines the Msg/BurnNFT response type. */
export interface MsgBurnNFTResponse {}
export interface MsgBurnNFTResponseProtoMsg {
  typeUrl: "/chainmain.nft.v1.MsgBurnNFTResponse";
  value: Uint8Array;
}
/** MsgBurnNFTResponse defines the Msg/BurnNFT response type. */
export interface MsgBurnNFTResponseAmino {}
export interface MsgBurnNFTResponseAminoMsg {
  type: "/chainmain.nft.v1.MsgBurnNFTResponse";
  value: MsgBurnNFTResponseAmino;
}
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
  typeUrl: "/chainmain.nft.v1.MsgIssueDenom",
  encode(message: MsgIssueDenom, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
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
  },
  fromAmino(object: MsgIssueDenomAmino): MsgIssueDenom {
    return {
      id: object.id,
      name: object.name,
      schema: object.schema,
      sender: object.sender,
      uri: object.uri
    };
  },
  toAmino(message: MsgIssueDenom): MsgIssueDenomAmino {
    const obj: any = {};
    obj.id = message.id;
    obj.name = message.name;
    obj.schema = message.schema;
    obj.sender = message.sender;
    obj.uri = message.uri;
    return obj;
  },
  fromAminoMsg(object: MsgIssueDenomAminoMsg): MsgIssueDenom {
    return MsgIssueDenom.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgIssueDenomProtoMsg): MsgIssueDenom {
    return MsgIssueDenom.decode(message.value);
  },
  toProto(message: MsgIssueDenom): Uint8Array {
    return MsgIssueDenom.encode(message).finish();
  },
  toProtoMsg(message: MsgIssueDenom): MsgIssueDenomProtoMsg {
    return {
      typeUrl: "/chainmain.nft.v1.MsgIssueDenom",
      value: MsgIssueDenom.encode(message).finish()
    };
  }
};
function createBaseMsgIssueDenomResponse(): MsgIssueDenomResponse {
  return {};
}
export const MsgIssueDenomResponse = {
  typeUrl: "/chainmain.nft.v1.MsgIssueDenomResponse",
  encode(_: MsgIssueDenomResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  fromJSON(_: any): MsgIssueDenomResponse {
    return {};
  },
  fromPartial(_: Partial<MsgIssueDenomResponse>): MsgIssueDenomResponse {
    const message = createBaseMsgIssueDenomResponse();
    return message;
  },
  fromAmino(_: MsgIssueDenomResponseAmino): MsgIssueDenomResponse {
    return {};
  },
  toAmino(_: MsgIssueDenomResponse): MsgIssueDenomResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgIssueDenomResponseAminoMsg): MsgIssueDenomResponse {
    return MsgIssueDenomResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgIssueDenomResponseProtoMsg): MsgIssueDenomResponse {
    return MsgIssueDenomResponse.decode(message.value);
  },
  toProto(message: MsgIssueDenomResponse): Uint8Array {
    return MsgIssueDenomResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgIssueDenomResponse): MsgIssueDenomResponseProtoMsg {
    return {
      typeUrl: "/chainmain.nft.v1.MsgIssueDenomResponse",
      value: MsgIssueDenomResponse.encode(message).finish()
    };
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
  typeUrl: "/chainmain.nft.v1.MsgTransferNFT",
  encode(message: MsgTransferNFT, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
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
  },
  fromAmino(object: MsgTransferNFTAmino): MsgTransferNFT {
    return {
      id: object.id,
      denomId: object.denom_id,
      sender: object.sender,
      recipient: object.recipient
    };
  },
  toAmino(message: MsgTransferNFT): MsgTransferNFTAmino {
    const obj: any = {};
    obj.id = message.id;
    obj.denom_id = message.denomId;
    obj.sender = message.sender;
    obj.recipient = message.recipient;
    return obj;
  },
  fromAminoMsg(object: MsgTransferNFTAminoMsg): MsgTransferNFT {
    return MsgTransferNFT.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgTransferNFTProtoMsg): MsgTransferNFT {
    return MsgTransferNFT.decode(message.value);
  },
  toProto(message: MsgTransferNFT): Uint8Array {
    return MsgTransferNFT.encode(message).finish();
  },
  toProtoMsg(message: MsgTransferNFT): MsgTransferNFTProtoMsg {
    return {
      typeUrl: "/chainmain.nft.v1.MsgTransferNFT",
      value: MsgTransferNFT.encode(message).finish()
    };
  }
};
function createBaseMsgTransferNFTResponse(): MsgTransferNFTResponse {
  return {};
}
export const MsgTransferNFTResponse = {
  typeUrl: "/chainmain.nft.v1.MsgTransferNFTResponse",
  encode(_: MsgTransferNFTResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  fromJSON(_: any): MsgTransferNFTResponse {
    return {};
  },
  fromPartial(_: Partial<MsgTransferNFTResponse>): MsgTransferNFTResponse {
    const message = createBaseMsgTransferNFTResponse();
    return message;
  },
  fromAmino(_: MsgTransferNFTResponseAmino): MsgTransferNFTResponse {
    return {};
  },
  toAmino(_: MsgTransferNFTResponse): MsgTransferNFTResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgTransferNFTResponseAminoMsg): MsgTransferNFTResponse {
    return MsgTransferNFTResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgTransferNFTResponseProtoMsg): MsgTransferNFTResponse {
    return MsgTransferNFTResponse.decode(message.value);
  },
  toProto(message: MsgTransferNFTResponse): Uint8Array {
    return MsgTransferNFTResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgTransferNFTResponse): MsgTransferNFTResponseProtoMsg {
    return {
      typeUrl: "/chainmain.nft.v1.MsgTransferNFTResponse",
      value: MsgTransferNFTResponse.encode(message).finish()
    };
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
  typeUrl: "/chainmain.nft.v1.MsgEditNFT",
  encode(message: MsgEditNFT, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
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
  },
  fromAmino(object: MsgEditNFTAmino): MsgEditNFT {
    return {
      id: object.id,
      denomId: object.denom_id,
      name: object.name,
      uri: object.uri,
      data: object.data,
      sender: object.sender
    };
  },
  toAmino(message: MsgEditNFT): MsgEditNFTAmino {
    const obj: any = {};
    obj.id = message.id;
    obj.denom_id = message.denomId;
    obj.name = message.name;
    obj.uri = message.uri;
    obj.data = message.data;
    obj.sender = message.sender;
    return obj;
  },
  fromAminoMsg(object: MsgEditNFTAminoMsg): MsgEditNFT {
    return MsgEditNFT.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgEditNFTProtoMsg): MsgEditNFT {
    return MsgEditNFT.decode(message.value);
  },
  toProto(message: MsgEditNFT): Uint8Array {
    return MsgEditNFT.encode(message).finish();
  },
  toProtoMsg(message: MsgEditNFT): MsgEditNFTProtoMsg {
    return {
      typeUrl: "/chainmain.nft.v1.MsgEditNFT",
      value: MsgEditNFT.encode(message).finish()
    };
  }
};
function createBaseMsgEditNFTResponse(): MsgEditNFTResponse {
  return {};
}
export const MsgEditNFTResponse = {
  typeUrl: "/chainmain.nft.v1.MsgEditNFTResponse",
  encode(_: MsgEditNFTResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  fromJSON(_: any): MsgEditNFTResponse {
    return {};
  },
  fromPartial(_: Partial<MsgEditNFTResponse>): MsgEditNFTResponse {
    const message = createBaseMsgEditNFTResponse();
    return message;
  },
  fromAmino(_: MsgEditNFTResponseAmino): MsgEditNFTResponse {
    return {};
  },
  toAmino(_: MsgEditNFTResponse): MsgEditNFTResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgEditNFTResponseAminoMsg): MsgEditNFTResponse {
    return MsgEditNFTResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgEditNFTResponseProtoMsg): MsgEditNFTResponse {
    return MsgEditNFTResponse.decode(message.value);
  },
  toProto(message: MsgEditNFTResponse): Uint8Array {
    return MsgEditNFTResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgEditNFTResponse): MsgEditNFTResponseProtoMsg {
    return {
      typeUrl: "/chainmain.nft.v1.MsgEditNFTResponse",
      value: MsgEditNFTResponse.encode(message).finish()
    };
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
  typeUrl: "/chainmain.nft.v1.MsgMintNFT",
  encode(message: MsgMintNFT, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
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
  },
  fromAmino(object: MsgMintNFTAmino): MsgMintNFT {
    return {
      id: object.id,
      denomId: object.denom_id,
      name: object.name,
      uri: object.uri,
      data: object.data,
      sender: object.sender,
      recipient: object.recipient
    };
  },
  toAmino(message: MsgMintNFT): MsgMintNFTAmino {
    const obj: any = {};
    obj.id = message.id;
    obj.denom_id = message.denomId;
    obj.name = message.name;
    obj.uri = message.uri;
    obj.data = message.data;
    obj.sender = message.sender;
    obj.recipient = message.recipient;
    return obj;
  },
  fromAminoMsg(object: MsgMintNFTAminoMsg): MsgMintNFT {
    return MsgMintNFT.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgMintNFTProtoMsg): MsgMintNFT {
    return MsgMintNFT.decode(message.value);
  },
  toProto(message: MsgMintNFT): Uint8Array {
    return MsgMintNFT.encode(message).finish();
  },
  toProtoMsg(message: MsgMintNFT): MsgMintNFTProtoMsg {
    return {
      typeUrl: "/chainmain.nft.v1.MsgMintNFT",
      value: MsgMintNFT.encode(message).finish()
    };
  }
};
function createBaseMsgMintNFTResponse(): MsgMintNFTResponse {
  return {};
}
export const MsgMintNFTResponse = {
  typeUrl: "/chainmain.nft.v1.MsgMintNFTResponse",
  encode(_: MsgMintNFTResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  fromJSON(_: any): MsgMintNFTResponse {
    return {};
  },
  fromPartial(_: Partial<MsgMintNFTResponse>): MsgMintNFTResponse {
    const message = createBaseMsgMintNFTResponse();
    return message;
  },
  fromAmino(_: MsgMintNFTResponseAmino): MsgMintNFTResponse {
    return {};
  },
  toAmino(_: MsgMintNFTResponse): MsgMintNFTResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgMintNFTResponseAminoMsg): MsgMintNFTResponse {
    return MsgMintNFTResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgMintNFTResponseProtoMsg): MsgMintNFTResponse {
    return MsgMintNFTResponse.decode(message.value);
  },
  toProto(message: MsgMintNFTResponse): Uint8Array {
    return MsgMintNFTResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgMintNFTResponse): MsgMintNFTResponseProtoMsg {
    return {
      typeUrl: "/chainmain.nft.v1.MsgMintNFTResponse",
      value: MsgMintNFTResponse.encode(message).finish()
    };
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
  typeUrl: "/chainmain.nft.v1.MsgBurnNFT",
  encode(message: MsgBurnNFT, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
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
  },
  fromAmino(object: MsgBurnNFTAmino): MsgBurnNFT {
    return {
      id: object.id,
      denomId: object.denom_id,
      sender: object.sender
    };
  },
  toAmino(message: MsgBurnNFT): MsgBurnNFTAmino {
    const obj: any = {};
    obj.id = message.id;
    obj.denom_id = message.denomId;
    obj.sender = message.sender;
    return obj;
  },
  fromAminoMsg(object: MsgBurnNFTAminoMsg): MsgBurnNFT {
    return MsgBurnNFT.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgBurnNFTProtoMsg): MsgBurnNFT {
    return MsgBurnNFT.decode(message.value);
  },
  toProto(message: MsgBurnNFT): Uint8Array {
    return MsgBurnNFT.encode(message).finish();
  },
  toProtoMsg(message: MsgBurnNFT): MsgBurnNFTProtoMsg {
    return {
      typeUrl: "/chainmain.nft.v1.MsgBurnNFT",
      value: MsgBurnNFT.encode(message).finish()
    };
  }
};
function createBaseMsgBurnNFTResponse(): MsgBurnNFTResponse {
  return {};
}
export const MsgBurnNFTResponse = {
  typeUrl: "/chainmain.nft.v1.MsgBurnNFTResponse",
  encode(_: MsgBurnNFTResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  fromJSON(_: any): MsgBurnNFTResponse {
    return {};
  },
  fromPartial(_: Partial<MsgBurnNFTResponse>): MsgBurnNFTResponse {
    const message = createBaseMsgBurnNFTResponse();
    return message;
  },
  fromAmino(_: MsgBurnNFTResponseAmino): MsgBurnNFTResponse {
    return {};
  },
  toAmino(_: MsgBurnNFTResponse): MsgBurnNFTResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgBurnNFTResponseAminoMsg): MsgBurnNFTResponse {
    return MsgBurnNFTResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgBurnNFTResponseProtoMsg): MsgBurnNFTResponse {
    return MsgBurnNFTResponse.decode(message.value);
  },
  toProto(message: MsgBurnNFTResponse): Uint8Array {
    return MsgBurnNFTResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgBurnNFTResponse): MsgBurnNFTResponseProtoMsg {
    return {
      typeUrl: "/chainmain.nft.v1.MsgBurnNFTResponse",
      value: MsgBurnNFTResponse.encode(message).finish()
    };
  }
};