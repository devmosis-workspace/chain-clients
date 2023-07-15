import { PublicKey, PublicKeySDKType } from "../crypto/keys";
import * as _m0 from "protobufjs/minimal";
import { isSet, bytesFromBase64 } from "../../helpers";
export interface PacketPing {}
export interface PacketPingSDKType {}
export interface PacketPong {}
export interface PacketPongSDKType {}
export interface PacketMsg {
  channelId: number;
  eof: boolean;
  data: Uint8Array;
}
export interface PacketMsgSDKType {
  channel_id: number;
  eof: boolean;
  data: Uint8Array;
}
export interface Packet {
  packetPing?: PacketPing;
  packetPong?: PacketPong;
  packetMsg?: PacketMsg;
}
export interface PacketSDKType {
  packet_ping?: PacketPingSDKType;
  packet_pong?: PacketPongSDKType;
  packet_msg?: PacketMsgSDKType;
}
export interface AuthSigMessage {
  pubKey?: PublicKey;
  sig: Uint8Array;
}
export interface AuthSigMessageSDKType {
  pub_key?: PublicKeySDKType;
  sig: Uint8Array;
}
function createBasePacketPing(): PacketPing {
  return {};
}
export const PacketPing = {
  encode(_: PacketPing, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },
  fromJSON(_: any): PacketPing {
    return {};
  },
  fromPartial(_: Partial<PacketPing>): PacketPing {
    const message = createBasePacketPing();
    return message;
  }
};
function createBasePacketPong(): PacketPong {
  return {};
}
export const PacketPong = {
  encode(_: PacketPong, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },
  fromJSON(_: any): PacketPong {
    return {};
  },
  fromPartial(_: Partial<PacketPong>): PacketPong {
    const message = createBasePacketPong();
    return message;
  }
};
function createBasePacketMsg(): PacketMsg {
  return {
    channelId: 0,
    eof: false,
    data: new Uint8Array()
  };
}
export const PacketMsg = {
  encode(message: PacketMsg, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.channelId !== 0) {
      writer.uint32(8).int32(message.channelId);
    }
    if (message.eof === true) {
      writer.uint32(16).bool(message.eof);
    }
    if (message.data.length !== 0) {
      writer.uint32(26).bytes(message.data);
    }
    return writer;
  },
  fromJSON(object: any): PacketMsg {
    return {
      channelId: isSet(object.channelId) ? Number(object.channelId) : 0,
      eof: isSet(object.eof) ? Boolean(object.eof) : false,
      data: isSet(object.data) ? bytesFromBase64(object.data) : new Uint8Array()
    };
  },
  fromPartial(object: Partial<PacketMsg>): PacketMsg {
    const message = createBasePacketMsg();
    message.channelId = object.channelId ?? 0;
    message.eof = object.eof ?? false;
    message.data = object.data ?? new Uint8Array();
    return message;
  }
};
function createBasePacket(): Packet {
  return {
    packetPing: undefined,
    packetPong: undefined,
    packetMsg: undefined
  };
}
export const Packet = {
  encode(message: Packet, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.packetPing !== undefined) {
      PacketPing.encode(message.packetPing, writer.uint32(10).fork()).ldelim();
    }
    if (message.packetPong !== undefined) {
      PacketPong.encode(message.packetPong, writer.uint32(18).fork()).ldelim();
    }
    if (message.packetMsg !== undefined) {
      PacketMsg.encode(message.packetMsg, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): Packet {
    return {
      packetPing: isSet(object.packetPing) ? PacketPing.fromJSON(object.packetPing) : undefined,
      packetPong: isSet(object.packetPong) ? PacketPong.fromJSON(object.packetPong) : undefined,
      packetMsg: isSet(object.packetMsg) ? PacketMsg.fromJSON(object.packetMsg) : undefined
    };
  },
  fromPartial(object: Partial<Packet>): Packet {
    const message = createBasePacket();
    message.packetPing = object.packetPing !== undefined && object.packetPing !== null ? PacketPing.fromPartial(object.packetPing) : undefined;
    message.packetPong = object.packetPong !== undefined && object.packetPong !== null ? PacketPong.fromPartial(object.packetPong) : undefined;
    message.packetMsg = object.packetMsg !== undefined && object.packetMsg !== null ? PacketMsg.fromPartial(object.packetMsg) : undefined;
    return message;
  }
};
function createBaseAuthSigMessage(): AuthSigMessage {
  return {
    pubKey: undefined,
    sig: new Uint8Array()
  };
}
export const AuthSigMessage = {
  encode(message: AuthSigMessage, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.pubKey !== undefined) {
      PublicKey.encode(message.pubKey, writer.uint32(10).fork()).ldelim();
    }
    if (message.sig.length !== 0) {
      writer.uint32(18).bytes(message.sig);
    }
    return writer;
  },
  fromJSON(object: any): AuthSigMessage {
    return {
      pubKey: isSet(object.pubKey) ? PublicKey.fromJSON(object.pubKey) : undefined,
      sig: isSet(object.sig) ? bytesFromBase64(object.sig) : new Uint8Array()
    };
  },
  fromPartial(object: Partial<AuthSigMessage>): AuthSigMessage {
    const message = createBaseAuthSigMessage();
    message.pubKey = object.pubKey !== undefined && object.pubKey !== null ? PublicKey.fromPartial(object.pubKey) : undefined;
    message.sig = object.sig ?? new Uint8Array();
    return message;
  }
};