import * as _m0 from "protobufjs/minimal";
export interface Voted {
    module: string;
    action: string;
    poll: string;
    voter: string;
    state: string;
}
export interface VotedSDKType {
    module: string;
    action: string;
    poll: string;
    voter: string;
    state: string;
}
export declare const Voted: {
    encode(message: Voted, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): Voted;
    fromPartial(object: Partial<Voted>): Voted;
};
