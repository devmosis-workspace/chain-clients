import { AminoMsg } from "@cosmjs/amino";
import { MsgAddSuper, MsgDeleteSuper } from "./tx";
export interface MsgAddSuperAminoType extends AminoMsg {
    type: "/irishub.guardian.MsgAddSuper";
    value: {
        description: string;
        address: string;
        added_by: string;
    };
}
export interface MsgDeleteSuperAminoType extends AminoMsg {
    type: "/irishub.guardian.MsgDeleteSuper";
    value: {
        address: string;
        deleted_by: string;
    };
}
export declare const AminoConverter: {
    "/irishub.guardian.MsgAddSuper": {
        aminoType: string;
        toAmino: ({ description, address, addedBy }: MsgAddSuper) => MsgAddSuperAminoType["value"];
        fromAmino: ({ description, address, added_by }: MsgAddSuperAminoType["value"]) => MsgAddSuper;
    };
    "/irishub.guardian.MsgDeleteSuper": {
        aminoType: string;
        toAmino: ({ address, deletedBy }: MsgDeleteSuper) => MsgDeleteSuperAminoType["value"];
        fromAmino: ({ address, deleted_by }: MsgDeleteSuperAminoType["value"]) => MsgDeleteSuper;
    };
};
