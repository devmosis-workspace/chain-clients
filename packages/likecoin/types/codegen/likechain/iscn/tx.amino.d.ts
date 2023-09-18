import { MsgCreateIscnRecord, MsgUpdateIscnRecord, MsgChangeIscnRecordOwnership } from "./tx";
export declare const AminoConverter: {
    "/likechain.iscn.MsgCreateIscnRecord": {
        aminoType: string;
        toAmino: (message: MsgCreateIscnRecord) => import("./tx").MsgCreateIscnRecordAmino;
        fromAmino: (object: import("./tx").MsgCreateIscnRecordAmino) => MsgCreateIscnRecord;
    };
    "/likechain.iscn.MsgUpdateIscnRecord": {
        aminoType: string;
        toAmino: (message: MsgUpdateIscnRecord) => import("./tx").MsgUpdateIscnRecordAmino;
        fromAmino: (object: import("./tx").MsgUpdateIscnRecordAmino) => MsgUpdateIscnRecord;
    };
    "/likechain.iscn.MsgChangeIscnRecordOwnership": {
        aminoType: string;
        toAmino: (message: MsgChangeIscnRecordOwnership) => import("./tx").MsgChangeIscnRecordOwnershipAmino;
        fromAmino: (object: import("./tx").MsgChangeIscnRecordOwnershipAmino) => MsgChangeIscnRecordOwnership;
    };
};
