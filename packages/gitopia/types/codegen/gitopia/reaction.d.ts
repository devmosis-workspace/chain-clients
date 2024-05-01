import { BinaryWriter } from "../binary";
export declare enum Emoji {
    EMOJI_THUMBS_UP = 0,
    EMOJI_THUMBS_DOWN = 1,
    UNRECOGNIZED = -1
}
export declare const EmojiSDKType: typeof Emoji;
export declare const EmojiAmino: typeof Emoji;
export declare function emojiFromJSON(object: any): Emoji;
export declare function emojiToJSON(object: Emoji): string;
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
export declare const Reaction: {
    typeUrl: string;
    encode(message: Reaction, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): Reaction;
    fromPartial(object: Partial<Reaction>): Reaction;
    fromAmino(object: ReactionAmino): Reaction;
    toAmino(message: Reaction): ReactionAmino;
    fromAminoMsg(object: ReactionAminoMsg): Reaction;
    fromProtoMsg(message: ReactionProtoMsg): Reaction;
    toProto(message: Reaction): Uint8Array;
    toProtoMsg(message: Reaction): ReactionProtoMsg;
};
