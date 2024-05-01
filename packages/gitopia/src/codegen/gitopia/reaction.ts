import { BinaryWriter } from "../binary";
import { isSet } from "../helpers";
export enum Emoji {
  EMOJI_THUMBS_UP = 0,
  EMOJI_THUMBS_DOWN = 1,
  UNRECOGNIZED = -1,
}
export const EmojiSDKType = Emoji;
export const EmojiAmino = Emoji;
export function emojiFromJSON(object: any): Emoji {
  switch (object) {
    case 0:
    case "EMOJI_THUMBS_UP":
      return Emoji.EMOJI_THUMBS_UP;
    case 1:
    case "EMOJI_THUMBS_DOWN":
      return Emoji.EMOJI_THUMBS_DOWN;
    case -1:
    case "UNRECOGNIZED":
    default:
      return Emoji.UNRECOGNIZED;
  }
}
export function emojiToJSON(object: Emoji): string {
  switch (object) {
    case Emoji.EMOJI_THUMBS_UP:
      return "EMOJI_THUMBS_UP";
    case Emoji.EMOJI_THUMBS_DOWN:
      return "EMOJI_THUMBS_DOWN";
    case Emoji.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}
export interface Reaction {
  address: string;
  emojis: Emoji[];
}
export interface ReactionProtoMsg {
  typeUrl: "/gitopia.gitopia.gitopia.Reaction";
  value: Uint8Array;
}
export interface ReactionAmino {
  address?: string;
  emojis?: Emoji[];
}
export interface ReactionAminoMsg {
  type: "/gitopia.gitopia.gitopia.Reaction";
  value: ReactionAmino;
}
export interface ReactionSDKType {
  address: string;
  emojis: Emoji[];
}
function createBaseReaction(): Reaction {
  return {
    address: "",
    emojis: []
  };
}
export const Reaction = {
  typeUrl: "/gitopia.gitopia.gitopia.Reaction",
  encode(message: Reaction, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.address !== "") {
      writer.uint32(10).string(message.address);
    }
    writer.uint32(18).fork();
    for (const v of message.emojis) {
      writer.int32(v);
    }
    writer.ldelim();
    return writer;
  },
  fromJSON(object: any): Reaction {
    return {
      address: isSet(object.address) ? String(object.address) : "",
      emojis: Array.isArray(object?.emojis) ? object.emojis.map((e: any) => emojiFromJSON(e)) : []
    };
  },
  fromPartial(object: Partial<Reaction>): Reaction {
    const message = createBaseReaction();
    message.address = object.address ?? "";
    message.emojis = object.emojis?.map(e => e) || [];
    return message;
  },
  fromAmino(object: ReactionAmino): Reaction {
    const message = createBaseReaction();
    if (object.address !== undefined && object.address !== null) {
      message.address = object.address;
    }
    message.emojis = object.emojis?.map(e => e) || [];
    return message;
  },
  toAmino(message: Reaction): ReactionAmino {
    const obj: any = {};
    obj.address = message.address === "" ? undefined : message.address;
    if (message.emojis) {
      obj.emojis = message.emojis.map(e => e);
    } else {
      obj.emojis = message.emojis;
    }
    return obj;
  },
  fromAminoMsg(object: ReactionAminoMsg): Reaction {
    return Reaction.fromAmino(object.value);
  },
  fromProtoMsg(message: ReactionProtoMsg): Reaction {
    return Reaction.decode(message.value);
  },
  toProto(message: Reaction): Uint8Array {
    return Reaction.encode(message).finish();
  },
  toProtoMsg(message: Reaction): ReactionProtoMsg {
    return {
      typeUrl: "/gitopia.gitopia.gitopia.Reaction",
      value: Reaction.encode(message).finish()
    };
  }
};