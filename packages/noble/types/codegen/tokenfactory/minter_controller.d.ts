import * as _m0 from "protobufjs/minimal";
export interface MinterController {
    minter: string;
    controller: string;
}
export interface MinterControllerSDKType {
    minter: string;
    controller: string;
}
export declare const MinterController: {
    encode(message: MinterController, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): MinterController;
    fromPartial(object: Partial<MinterController>): MinterController;
};
