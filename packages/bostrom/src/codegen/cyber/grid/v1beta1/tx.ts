import { Coin, CoinAmino, CoinSDKType } from "../../../cosmos/base/v1beta1/coin";
import { BinaryWriter } from "../../../binary";
import { isSet } from "../../../helpers";
export interface MsgCreateRoute {
  source: string;
  destination: string;
  name: string;
}
export interface MsgCreateRouteProtoMsg {
  typeUrl: "/cyber.grid.v1beta1.MsgCreateRoute";
  value: Uint8Array;
}
export interface MsgCreateRouteAmino {
  source?: string;
  destination?: string;
  name?: string;
}
export interface MsgCreateRouteAminoMsg {
  type: "/cyber.grid.v1beta1.MsgCreateRoute";
  value: MsgCreateRouteAmino;
}
export interface MsgCreateRouteSDKType {
  source: string;
  destination: string;
  name: string;
}
export interface MsgEditRoute {
  source: string;
  destination: string;
  value: Coin;
}
export interface MsgEditRouteProtoMsg {
  typeUrl: "/cyber.grid.v1beta1.MsgEditRoute";
  value: Uint8Array;
}
export interface MsgEditRouteAmino {
  source?: string;
  destination?: string;
  value?: CoinAmino;
}
export interface MsgEditRouteAminoMsg {
  type: "/cyber.grid.v1beta1.MsgEditRoute";
  value: MsgEditRouteAmino;
}
export interface MsgEditRouteSDKType {
  source: string;
  destination: string;
  value: CoinSDKType;
}
export interface MsgDeleteRoute {
  source: string;
  destination: string;
}
export interface MsgDeleteRouteProtoMsg {
  typeUrl: "/cyber.grid.v1beta1.MsgDeleteRoute";
  value: Uint8Array;
}
export interface MsgDeleteRouteAmino {
  source?: string;
  destination?: string;
}
export interface MsgDeleteRouteAminoMsg {
  type: "/cyber.grid.v1beta1.MsgDeleteRoute";
  value: MsgDeleteRouteAmino;
}
export interface MsgDeleteRouteSDKType {
  source: string;
  destination: string;
}
export interface MsgEditRouteName {
  source: string;
  destination: string;
  name: string;
}
export interface MsgEditRouteNameProtoMsg {
  typeUrl: "/cyber.grid.v1beta1.MsgEditRouteName";
  value: Uint8Array;
}
export interface MsgEditRouteNameAmino {
  source?: string;
  destination?: string;
  name?: string;
}
export interface MsgEditRouteNameAminoMsg {
  type: "/cyber.grid.v1beta1.MsgEditRouteName";
  value: MsgEditRouteNameAmino;
}
export interface MsgEditRouteNameSDKType {
  source: string;
  destination: string;
  name: string;
}
export interface MsgCreateRouteResponse {}
export interface MsgCreateRouteResponseProtoMsg {
  typeUrl: "/cyber.grid.v1beta1.MsgCreateRouteResponse";
  value: Uint8Array;
}
export interface MsgCreateRouteResponseAmino {}
export interface MsgCreateRouteResponseAminoMsg {
  type: "/cyber.grid.v1beta1.MsgCreateRouteResponse";
  value: MsgCreateRouteResponseAmino;
}
export interface MsgCreateRouteResponseSDKType {}
export interface MsgEditRouteResponse {}
export interface MsgEditRouteResponseProtoMsg {
  typeUrl: "/cyber.grid.v1beta1.MsgEditRouteResponse";
  value: Uint8Array;
}
export interface MsgEditRouteResponseAmino {}
export interface MsgEditRouteResponseAminoMsg {
  type: "/cyber.grid.v1beta1.MsgEditRouteResponse";
  value: MsgEditRouteResponseAmino;
}
export interface MsgEditRouteResponseSDKType {}
export interface MsgDeleteRouteResponse {}
export interface MsgDeleteRouteResponseProtoMsg {
  typeUrl: "/cyber.grid.v1beta1.MsgDeleteRouteResponse";
  value: Uint8Array;
}
export interface MsgDeleteRouteResponseAmino {}
export interface MsgDeleteRouteResponseAminoMsg {
  type: "/cyber.grid.v1beta1.MsgDeleteRouteResponse";
  value: MsgDeleteRouteResponseAmino;
}
export interface MsgDeleteRouteResponseSDKType {}
export interface MsgEditRouteNameResponse {}
export interface MsgEditRouteNameResponseProtoMsg {
  typeUrl: "/cyber.grid.v1beta1.MsgEditRouteNameResponse";
  value: Uint8Array;
}
export interface MsgEditRouteNameResponseAmino {}
export interface MsgEditRouteNameResponseAminoMsg {
  type: "/cyber.grid.v1beta1.MsgEditRouteNameResponse";
  value: MsgEditRouteNameResponseAmino;
}
export interface MsgEditRouteNameResponseSDKType {}
function createBaseMsgCreateRoute(): MsgCreateRoute {
  return {
    source: "",
    destination: "",
    name: ""
  };
}
export const MsgCreateRoute = {
  typeUrl: "/cyber.grid.v1beta1.MsgCreateRoute",
  encode(message: MsgCreateRoute, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.source !== "") {
      writer.uint32(10).string(message.source);
    }
    if (message.destination !== "") {
      writer.uint32(18).string(message.destination);
    }
    if (message.name !== "") {
      writer.uint32(26).string(message.name);
    }
    return writer;
  },
  fromJSON(object: any): MsgCreateRoute {
    return {
      source: isSet(object.source) ? String(object.source) : "",
      destination: isSet(object.destination) ? String(object.destination) : "",
      name: isSet(object.name) ? String(object.name) : ""
    };
  },
  fromPartial(object: Partial<MsgCreateRoute>): MsgCreateRoute {
    const message = createBaseMsgCreateRoute();
    message.source = object.source ?? "";
    message.destination = object.destination ?? "";
    message.name = object.name ?? "";
    return message;
  },
  fromAmino(object: MsgCreateRouteAmino): MsgCreateRoute {
    const message = createBaseMsgCreateRoute();
    if (object.source !== undefined && object.source !== null) {
      message.source = object.source;
    }
    if (object.destination !== undefined && object.destination !== null) {
      message.destination = object.destination;
    }
    if (object.name !== undefined && object.name !== null) {
      message.name = object.name;
    }
    return message;
  },
  toAmino(message: MsgCreateRoute): MsgCreateRouteAmino {
    const obj: any = {};
    obj.source = message.source === "" ? undefined : message.source;
    obj.destination = message.destination === "" ? undefined : message.destination;
    obj.name = message.name === "" ? undefined : message.name;
    return obj;
  },
  fromAminoMsg(object: MsgCreateRouteAminoMsg): MsgCreateRoute {
    return MsgCreateRoute.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgCreateRouteProtoMsg): MsgCreateRoute {
    return MsgCreateRoute.decode(message.value);
  },
  toProto(message: MsgCreateRoute): Uint8Array {
    return MsgCreateRoute.encode(message).finish();
  },
  toProtoMsg(message: MsgCreateRoute): MsgCreateRouteProtoMsg {
    return {
      typeUrl: "/cyber.grid.v1beta1.MsgCreateRoute",
      value: MsgCreateRoute.encode(message).finish()
    };
  }
};
function createBaseMsgEditRoute(): MsgEditRoute {
  return {
    source: "",
    destination: "",
    value: Coin.fromPartial({})
  };
}
export const MsgEditRoute = {
  typeUrl: "/cyber.grid.v1beta1.MsgEditRoute",
  encode(message: MsgEditRoute, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.source !== "") {
      writer.uint32(10).string(message.source);
    }
    if (message.destination !== "") {
      writer.uint32(18).string(message.destination);
    }
    if (message.value !== undefined) {
      Coin.encode(message.value, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): MsgEditRoute {
    return {
      source: isSet(object.source) ? String(object.source) : "",
      destination: isSet(object.destination) ? String(object.destination) : "",
      value: isSet(object.value) ? Coin.fromJSON(object.value) : undefined
    };
  },
  fromPartial(object: Partial<MsgEditRoute>): MsgEditRoute {
    const message = createBaseMsgEditRoute();
    message.source = object.source ?? "";
    message.destination = object.destination ?? "";
    message.value = object.value !== undefined && object.value !== null ? Coin.fromPartial(object.value) : undefined;
    return message;
  },
  fromAmino(object: MsgEditRouteAmino): MsgEditRoute {
    const message = createBaseMsgEditRoute();
    if (object.source !== undefined && object.source !== null) {
      message.source = object.source;
    }
    if (object.destination !== undefined && object.destination !== null) {
      message.destination = object.destination;
    }
    if (object.value !== undefined && object.value !== null) {
      message.value = Coin.fromAmino(object.value);
    }
    return message;
  },
  toAmino(message: MsgEditRoute): MsgEditRouteAmino {
    const obj: any = {};
    obj.source = message.source === "" ? undefined : message.source;
    obj.destination = message.destination === "" ? undefined : message.destination;
    obj.value = message.value ? Coin.toAmino(message.value) : undefined;
    return obj;
  },
  fromAminoMsg(object: MsgEditRouteAminoMsg): MsgEditRoute {
    return MsgEditRoute.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgEditRouteProtoMsg): MsgEditRoute {
    return MsgEditRoute.decode(message.value);
  },
  toProto(message: MsgEditRoute): Uint8Array {
    return MsgEditRoute.encode(message).finish();
  },
  toProtoMsg(message: MsgEditRoute): MsgEditRouteProtoMsg {
    return {
      typeUrl: "/cyber.grid.v1beta1.MsgEditRoute",
      value: MsgEditRoute.encode(message).finish()
    };
  }
};
function createBaseMsgDeleteRoute(): MsgDeleteRoute {
  return {
    source: "",
    destination: ""
  };
}
export const MsgDeleteRoute = {
  typeUrl: "/cyber.grid.v1beta1.MsgDeleteRoute",
  encode(message: MsgDeleteRoute, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.source !== "") {
      writer.uint32(10).string(message.source);
    }
    if (message.destination !== "") {
      writer.uint32(18).string(message.destination);
    }
    return writer;
  },
  fromJSON(object: any): MsgDeleteRoute {
    return {
      source: isSet(object.source) ? String(object.source) : "",
      destination: isSet(object.destination) ? String(object.destination) : ""
    };
  },
  fromPartial(object: Partial<MsgDeleteRoute>): MsgDeleteRoute {
    const message = createBaseMsgDeleteRoute();
    message.source = object.source ?? "";
    message.destination = object.destination ?? "";
    return message;
  },
  fromAmino(object: MsgDeleteRouteAmino): MsgDeleteRoute {
    const message = createBaseMsgDeleteRoute();
    if (object.source !== undefined && object.source !== null) {
      message.source = object.source;
    }
    if (object.destination !== undefined && object.destination !== null) {
      message.destination = object.destination;
    }
    return message;
  },
  toAmino(message: MsgDeleteRoute): MsgDeleteRouteAmino {
    const obj: any = {};
    obj.source = message.source === "" ? undefined : message.source;
    obj.destination = message.destination === "" ? undefined : message.destination;
    return obj;
  },
  fromAminoMsg(object: MsgDeleteRouteAminoMsg): MsgDeleteRoute {
    return MsgDeleteRoute.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgDeleteRouteProtoMsg): MsgDeleteRoute {
    return MsgDeleteRoute.decode(message.value);
  },
  toProto(message: MsgDeleteRoute): Uint8Array {
    return MsgDeleteRoute.encode(message).finish();
  },
  toProtoMsg(message: MsgDeleteRoute): MsgDeleteRouteProtoMsg {
    return {
      typeUrl: "/cyber.grid.v1beta1.MsgDeleteRoute",
      value: MsgDeleteRoute.encode(message).finish()
    };
  }
};
function createBaseMsgEditRouteName(): MsgEditRouteName {
  return {
    source: "",
    destination: "",
    name: ""
  };
}
export const MsgEditRouteName = {
  typeUrl: "/cyber.grid.v1beta1.MsgEditRouteName",
  encode(message: MsgEditRouteName, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.source !== "") {
      writer.uint32(10).string(message.source);
    }
    if (message.destination !== "") {
      writer.uint32(18).string(message.destination);
    }
    if (message.name !== "") {
      writer.uint32(26).string(message.name);
    }
    return writer;
  },
  fromJSON(object: any): MsgEditRouteName {
    return {
      source: isSet(object.source) ? String(object.source) : "",
      destination: isSet(object.destination) ? String(object.destination) : "",
      name: isSet(object.name) ? String(object.name) : ""
    };
  },
  fromPartial(object: Partial<MsgEditRouteName>): MsgEditRouteName {
    const message = createBaseMsgEditRouteName();
    message.source = object.source ?? "";
    message.destination = object.destination ?? "";
    message.name = object.name ?? "";
    return message;
  },
  fromAmino(object: MsgEditRouteNameAmino): MsgEditRouteName {
    const message = createBaseMsgEditRouteName();
    if (object.source !== undefined && object.source !== null) {
      message.source = object.source;
    }
    if (object.destination !== undefined && object.destination !== null) {
      message.destination = object.destination;
    }
    if (object.name !== undefined && object.name !== null) {
      message.name = object.name;
    }
    return message;
  },
  toAmino(message: MsgEditRouteName): MsgEditRouteNameAmino {
    const obj: any = {};
    obj.source = message.source === "" ? undefined : message.source;
    obj.destination = message.destination === "" ? undefined : message.destination;
    obj.name = message.name === "" ? undefined : message.name;
    return obj;
  },
  fromAminoMsg(object: MsgEditRouteNameAminoMsg): MsgEditRouteName {
    return MsgEditRouteName.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgEditRouteNameProtoMsg): MsgEditRouteName {
    return MsgEditRouteName.decode(message.value);
  },
  toProto(message: MsgEditRouteName): Uint8Array {
    return MsgEditRouteName.encode(message).finish();
  },
  toProtoMsg(message: MsgEditRouteName): MsgEditRouteNameProtoMsg {
    return {
      typeUrl: "/cyber.grid.v1beta1.MsgEditRouteName",
      value: MsgEditRouteName.encode(message).finish()
    };
  }
};
function createBaseMsgCreateRouteResponse(): MsgCreateRouteResponse {
  return {};
}
export const MsgCreateRouteResponse = {
  typeUrl: "/cyber.grid.v1beta1.MsgCreateRouteResponse",
  encode(_: MsgCreateRouteResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  fromJSON(_: any): MsgCreateRouteResponse {
    return {};
  },
  fromPartial(_: Partial<MsgCreateRouteResponse>): MsgCreateRouteResponse {
    const message = createBaseMsgCreateRouteResponse();
    return message;
  },
  fromAmino(_: MsgCreateRouteResponseAmino): MsgCreateRouteResponse {
    const message = createBaseMsgCreateRouteResponse();
    return message;
  },
  toAmino(_: MsgCreateRouteResponse): MsgCreateRouteResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgCreateRouteResponseAminoMsg): MsgCreateRouteResponse {
    return MsgCreateRouteResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgCreateRouteResponseProtoMsg): MsgCreateRouteResponse {
    return MsgCreateRouteResponse.decode(message.value);
  },
  toProto(message: MsgCreateRouteResponse): Uint8Array {
    return MsgCreateRouteResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgCreateRouteResponse): MsgCreateRouteResponseProtoMsg {
    return {
      typeUrl: "/cyber.grid.v1beta1.MsgCreateRouteResponse",
      value: MsgCreateRouteResponse.encode(message).finish()
    };
  }
};
function createBaseMsgEditRouteResponse(): MsgEditRouteResponse {
  return {};
}
export const MsgEditRouteResponse = {
  typeUrl: "/cyber.grid.v1beta1.MsgEditRouteResponse",
  encode(_: MsgEditRouteResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  fromJSON(_: any): MsgEditRouteResponse {
    return {};
  },
  fromPartial(_: Partial<MsgEditRouteResponse>): MsgEditRouteResponse {
    const message = createBaseMsgEditRouteResponse();
    return message;
  },
  fromAmino(_: MsgEditRouteResponseAmino): MsgEditRouteResponse {
    const message = createBaseMsgEditRouteResponse();
    return message;
  },
  toAmino(_: MsgEditRouteResponse): MsgEditRouteResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgEditRouteResponseAminoMsg): MsgEditRouteResponse {
    return MsgEditRouteResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgEditRouteResponseProtoMsg): MsgEditRouteResponse {
    return MsgEditRouteResponse.decode(message.value);
  },
  toProto(message: MsgEditRouteResponse): Uint8Array {
    return MsgEditRouteResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgEditRouteResponse): MsgEditRouteResponseProtoMsg {
    return {
      typeUrl: "/cyber.grid.v1beta1.MsgEditRouteResponse",
      value: MsgEditRouteResponse.encode(message).finish()
    };
  }
};
function createBaseMsgDeleteRouteResponse(): MsgDeleteRouteResponse {
  return {};
}
export const MsgDeleteRouteResponse = {
  typeUrl: "/cyber.grid.v1beta1.MsgDeleteRouteResponse",
  encode(_: MsgDeleteRouteResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  fromJSON(_: any): MsgDeleteRouteResponse {
    return {};
  },
  fromPartial(_: Partial<MsgDeleteRouteResponse>): MsgDeleteRouteResponse {
    const message = createBaseMsgDeleteRouteResponse();
    return message;
  },
  fromAmino(_: MsgDeleteRouteResponseAmino): MsgDeleteRouteResponse {
    const message = createBaseMsgDeleteRouteResponse();
    return message;
  },
  toAmino(_: MsgDeleteRouteResponse): MsgDeleteRouteResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgDeleteRouteResponseAminoMsg): MsgDeleteRouteResponse {
    return MsgDeleteRouteResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgDeleteRouteResponseProtoMsg): MsgDeleteRouteResponse {
    return MsgDeleteRouteResponse.decode(message.value);
  },
  toProto(message: MsgDeleteRouteResponse): Uint8Array {
    return MsgDeleteRouteResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgDeleteRouteResponse): MsgDeleteRouteResponseProtoMsg {
    return {
      typeUrl: "/cyber.grid.v1beta1.MsgDeleteRouteResponse",
      value: MsgDeleteRouteResponse.encode(message).finish()
    };
  }
};
function createBaseMsgEditRouteNameResponse(): MsgEditRouteNameResponse {
  return {};
}
export const MsgEditRouteNameResponse = {
  typeUrl: "/cyber.grid.v1beta1.MsgEditRouteNameResponse",
  encode(_: MsgEditRouteNameResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  fromJSON(_: any): MsgEditRouteNameResponse {
    return {};
  },
  fromPartial(_: Partial<MsgEditRouteNameResponse>): MsgEditRouteNameResponse {
    const message = createBaseMsgEditRouteNameResponse();
    return message;
  },
  fromAmino(_: MsgEditRouteNameResponseAmino): MsgEditRouteNameResponse {
    const message = createBaseMsgEditRouteNameResponse();
    return message;
  },
  toAmino(_: MsgEditRouteNameResponse): MsgEditRouteNameResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgEditRouteNameResponseAminoMsg): MsgEditRouteNameResponse {
    return MsgEditRouteNameResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgEditRouteNameResponseProtoMsg): MsgEditRouteNameResponse {
    return MsgEditRouteNameResponse.decode(message.value);
  },
  toProto(message: MsgEditRouteNameResponse): Uint8Array {
    return MsgEditRouteNameResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgEditRouteNameResponse): MsgEditRouteNameResponseProtoMsg {
    return {
      typeUrl: "/cyber.grid.v1beta1.MsgEditRouteNameResponse",
      value: MsgEditRouteNameResponse.encode(message).finish()
    };
  }
};