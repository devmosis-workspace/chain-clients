import { Long } from "../../../helpers";
import * as _m0 from "protobufjs/minimal";
/** GroupID stores owner, deployment sequence number and group sequence number */
export interface GroupID {
    owner: string;
    dseq: Long;
    gseq: number;
}
/** GroupID stores owner, deployment sequence number and group sequence number */
export interface GroupIDSDKType {
    owner: string;
    dseq: Long;
    gseq: number;
}
export declare const GroupID: {
    encode(message: GroupID, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): GroupID;
    fromPartial(object: Partial<GroupID>): GroupID;
};
