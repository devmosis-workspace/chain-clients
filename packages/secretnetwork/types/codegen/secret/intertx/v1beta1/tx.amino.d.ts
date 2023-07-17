import { AminoMsg } from "@cosmjs/amino";
import { MsgRegisterAccount, MsgSubmitTx } from "./tx";
export interface MsgRegisterAccountAminoType extends AminoMsg {
    type: "/secret.intertx.v1beta1.MsgRegisterAccount";
    value: {
        owner: string;
        connection_id: string;
        version: string;
    };
}
export interface MsgSubmitTxAminoType extends AminoMsg {
    type: "/secret.intertx.v1beta1.MsgSubmitTx";
    value: {
        owner: Uint8Array;
        connection_id: string;
        msg: {
            type_url: string;
            value: Uint8Array;
        };
    };
}
export declare const AminoConverter: {
    "/secret.intertx.v1beta1.MsgRegisterAccount": {
        aminoType: string;
        toAmino: ({ owner, connectionId, version }: MsgRegisterAccount) => MsgRegisterAccountAminoType["value"];
        fromAmino: ({ owner, connection_id, version }: MsgRegisterAccountAminoType["value"]) => MsgRegisterAccount;
    };
    "/secret.intertx.v1beta1.MsgSubmitTx": {
        aminoType: string;
        toAmino: ({ owner, connectionId, msg }: MsgSubmitTx) => MsgSubmitTxAminoType["value"];
        fromAmino: ({ owner, connection_id, msg }: MsgSubmitTxAminoType["value"]) => MsgSubmitTx;
    };
};
