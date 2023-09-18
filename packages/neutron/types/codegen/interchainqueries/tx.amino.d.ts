import { MsgRegisterInterchainQuery, MsgSubmitQueryResult, MsgRemoveInterchainQueryRequest, MsgUpdateInterchainQueryRequest } from "./tx";
export declare const AminoConverter: {
    "/neutron.interchainqueries.MsgRegisterInterchainQuery": {
        aminoType: string;
        toAmino: (message: MsgRegisterInterchainQuery) => import("./tx").MsgRegisterInterchainQueryAmino;
        fromAmino: (object: import("./tx").MsgRegisterInterchainQueryAmino) => MsgRegisterInterchainQuery;
    };
    "/neutron.interchainqueries.MsgSubmitQueryResult": {
        aminoType: string;
        toAmino: (message: MsgSubmitQueryResult) => import("./tx").MsgSubmitQueryResultAmino;
        fromAmino: (object: import("./tx").MsgSubmitQueryResultAmino) => MsgSubmitQueryResult;
    };
    "/neutron.interchainqueries.MsgRemoveInterchainQueryRequest": {
        aminoType: string;
        toAmino: (message: MsgRemoveInterchainQueryRequest) => import("./tx").MsgRemoveInterchainQueryRequestAmino;
        fromAmino: (object: import("./tx").MsgRemoveInterchainQueryRequestAmino) => MsgRemoveInterchainQueryRequest;
    };
    "/neutron.interchainqueries.MsgUpdateInterchainQueryRequest": {
        aminoType: string;
        toAmino: (message: MsgUpdateInterchainQueryRequest) => import("./tx").MsgUpdateInterchainQueryRequestAmino;
        fromAmino: (object: import("./tx").MsgUpdateInterchainQueryRequestAmino) => MsgUpdateInterchainQueryRequest;
    };
};
