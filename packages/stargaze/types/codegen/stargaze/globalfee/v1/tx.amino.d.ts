import { AminoMsg } from "@cosmjs/amino";
import { MsgSetCodeAuthorization, MsgRemoveCodeAuthorization, MsgSetContractAuthorization, MsgRemoveContractAuthorization } from "./tx";
export interface MsgSetCodeAuthorizationAminoType extends AminoMsg {
    type: "/publicawesome.stargaze.globalfee.v1.MsgSetCodeAuthorization";
    value: {
        sender: string;
        code_authorization: {
            code_id: string;
            methods: string[];
        };
    };
}
export interface MsgRemoveCodeAuthorizationAminoType extends AminoMsg {
    type: "/publicawesome.stargaze.globalfee.v1.MsgRemoveCodeAuthorization";
    value: {
        sender: string;
        code_id: string;
    };
}
export interface MsgSetContractAuthorizationAminoType extends AminoMsg {
    type: "/publicawesome.stargaze.globalfee.v1.MsgSetContractAuthorization";
    value: {
        sender: string;
        contract_authorization: {
            contract_address: string;
            methods: string[];
        };
    };
}
export interface MsgRemoveContractAuthorizationAminoType extends AminoMsg {
    type: "/publicawesome.stargaze.globalfee.v1.MsgRemoveContractAuthorization";
    value: {
        sender: string;
        contract_address: string;
    };
}
export declare const AminoConverter: {
    "/publicawesome.stargaze.globalfee.v1.MsgSetCodeAuthorization": {
        aminoType: string;
        toAmino: ({ sender, codeAuthorization }: MsgSetCodeAuthorization) => MsgSetCodeAuthorizationAminoType["value"];
        fromAmino: ({ sender, code_authorization }: MsgSetCodeAuthorizationAminoType["value"]) => MsgSetCodeAuthorization;
    };
    "/publicawesome.stargaze.globalfee.v1.MsgRemoveCodeAuthorization": {
        aminoType: string;
        toAmino: ({ sender, codeId }: MsgRemoveCodeAuthorization) => MsgRemoveCodeAuthorizationAminoType["value"];
        fromAmino: ({ sender, code_id }: MsgRemoveCodeAuthorizationAminoType["value"]) => MsgRemoveCodeAuthorization;
    };
    "/publicawesome.stargaze.globalfee.v1.MsgSetContractAuthorization": {
        aminoType: string;
        toAmino: ({ sender, contractAuthorization }: MsgSetContractAuthorization) => MsgSetContractAuthorizationAminoType["value"];
        fromAmino: ({ sender, contract_authorization }: MsgSetContractAuthorizationAminoType["value"]) => MsgSetContractAuthorization;
    };
    "/publicawesome.stargaze.globalfee.v1.MsgRemoveContractAuthorization": {
        aminoType: string;
        toAmino: ({ sender, contractAddress }: MsgRemoveContractAuthorization) => MsgRemoveContractAuthorizationAminoType["value"];
        fromAmino: ({ sender, contract_address }: MsgRemoveContractAuthorizationAminoType["value"]) => MsgRemoveContractAuthorization;
    };
};
