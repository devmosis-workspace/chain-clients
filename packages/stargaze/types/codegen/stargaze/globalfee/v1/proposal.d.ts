import { CodeAuthorization, CodeAuthorizationSDKType, ContractAuthorization, ContractAuthorizationSDKType } from "./globalfee";
import { Long } from "../../../helpers";
import * as _m0 from "protobufjs/minimal";
export interface SetCodeAuthorizationProposal {
    title: string;
    description: string;
    codeAuthorization?: CodeAuthorization;
}
export interface SetCodeAuthorizationProposalSDKType {
    title: string;
    description: string;
    code_authorization?: CodeAuthorizationSDKType;
}
export interface RemoveCodeAuthorizationProposal {
    title: string;
    description: string;
    codeId: Long;
}
export interface RemoveCodeAuthorizationProposalSDKType {
    title: string;
    description: string;
    code_id: Long;
}
export interface SetContractAuthorizationProposal {
    title: string;
    description: string;
    contractAuthorization?: ContractAuthorization;
}
export interface SetContractAuthorizationProposalSDKType {
    title: string;
    description: string;
    contract_authorization?: ContractAuthorizationSDKType;
}
export interface RemoveContractAuthorizationProposal {
    title: string;
    description: string;
    contractAddress: string;
}
export interface RemoveContractAuthorizationProposalSDKType {
    title: string;
    description: string;
    contract_address: string;
}
export declare const SetCodeAuthorizationProposal: {
    encode(message: SetCodeAuthorizationProposal, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): SetCodeAuthorizationProposal;
    fromPartial(object: Partial<SetCodeAuthorizationProposal>): SetCodeAuthorizationProposal;
};
export declare const RemoveCodeAuthorizationProposal: {
    encode(message: RemoveCodeAuthorizationProposal, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): RemoveCodeAuthorizationProposal;
    fromPartial(object: Partial<RemoveCodeAuthorizationProposal>): RemoveCodeAuthorizationProposal;
};
export declare const SetContractAuthorizationProposal: {
    encode(message: SetContractAuthorizationProposal, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): SetContractAuthorizationProposal;
    fromPartial(object: Partial<SetContractAuthorizationProposal>): SetContractAuthorizationProposal;
};
export declare const RemoveContractAuthorizationProposal: {
    encode(message: RemoveContractAuthorizationProposal, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): RemoveContractAuthorizationProposal;
    fromPartial(object: Partial<RemoveContractAuthorizationProposal>): RemoveContractAuthorizationProposal;
};
