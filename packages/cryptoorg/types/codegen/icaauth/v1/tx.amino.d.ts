import { AminoMsg } from "@cosmjs/amino";
import { MsgRegisterAccount, MsgSubmitTx } from "./tx";
export interface MsgRegisterAccountAminoType extends AminoMsg {
    type: "/chainmain.icaauth.v1.MsgRegisterAccount";
    value: {
        owner: string;
        connectionId: string;
        version: string;
    };
}
export interface MsgSubmitTxAminoType extends AminoMsg {
    type: "/chainmain.icaauth.v1.MsgSubmitTx";
    value: {
        owner: string;
        connectionId: string;
        msgs: {
            type_url: string;
            value: Uint8Array;
        }[];
        timeoutDuration: {
            seconds: string;
            nanos: number;
        };
    };
}
export declare const AminoConverter: {
    "/chainmain.icaauth.v1.MsgRegisterAccount": {
        aminoType: string;
        toAmino: ({ owner, connectionId, version }: MsgRegisterAccount) => MsgRegisterAccountAminoType["value"];
        fromAmino: ({ owner, connectionId, version }: MsgRegisterAccountAminoType["value"]) => MsgRegisterAccount;
    };
    "/chainmain.icaauth.v1.MsgSubmitTx": {
        aminoType: string;
        toAmino: ({ owner, connectionId, msgs, timeoutDuration }: MsgSubmitTx) => MsgSubmitTxAminoType["value"];
        fromAmino: ({ owner, connectionId, msgs, timeoutDuration }: MsgSubmitTxAminoType["value"]) => MsgSubmitTx;
    };
};
