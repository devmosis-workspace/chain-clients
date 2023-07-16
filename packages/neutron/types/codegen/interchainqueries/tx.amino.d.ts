import { AminoMsg } from "@cosmjs/amino";
import { MsgRegisterInterchainQuery, MsgSubmitQueryResult, MsgRemoveInterchainQueryRequest, MsgUpdateInterchainQueryRequest } from "./tx";
export interface MsgRegisterInterchainQueryAminoType extends AminoMsg {
    type: "/neutron.interchainqueries.MsgRegisterInterchainQuery";
    value: {
        query_type: string;
        keys: {
            path: string;
            key: Uint8Array;
        }[];
        transactions_filter: string;
        connection_id: string;
        update_period: string;
        sender: string;
    };
}
export interface MsgSubmitQueryResultAminoType extends AminoMsg {
    type: "/neutron.interchainqueries.MsgSubmitQueryResult";
    value: {
        query_id: string;
        sender: string;
        client_id: string;
        result: {
            kv_results: {
                storage_prefix: string;
                key: Uint8Array;
                value: Uint8Array;
                Proof: {
                    ops: {
                        type: string;
                        key: Uint8Array;
                        data: Uint8Array;
                    }[];
                };
            }[];
            block: {
                next_block_header: {
                    type_url: string;
                    value: Uint8Array;
                };
                header: {
                    type_url: string;
                    value: Uint8Array;
                };
                tx: {
                    response: {
                        code: number;
                        data: Uint8Array;
                        log: string;
                        info: string;
                        gas_wanted: string;
                        gas_used: string;
                        events: {
                            type: string;
                            attributes: {
                                key: Uint8Array;
                                value: Uint8Array;
                                index: boolean;
                            }[];
                        }[];
                        codespace: string;
                    };
                    delivery_proof: {
                        total: string;
                        index: string;
                        leaf_hash: Uint8Array;
                        aunts: Uint8Array[];
                    };
                    inclusion_proof: {
                        total: string;
                        index: string;
                        leaf_hash: Uint8Array;
                        aunts: Uint8Array[];
                    };
                    data: Uint8Array;
                };
            };
            height: string;
            revision: string;
            allow_kv_callbacks: boolean;
        };
    };
}
export interface MsgRemoveInterchainQueryRequestAminoType extends AminoMsg {
    type: "/neutron.interchainqueries.MsgRemoveInterchainQueryRequest";
    value: {
        query_id: string;
        sender: string;
    };
}
export interface MsgUpdateInterchainQueryRequestAminoType extends AminoMsg {
    type: "/neutron.interchainqueries.MsgUpdateInterchainQueryRequest";
    value: {
        query_id: string;
        new_keys: {
            path: string;
            key: Uint8Array;
        }[];
        new_update_period: string;
        new_transactions_filter: string;
        sender: string;
    };
}
export declare const AminoConverter: {
    "/neutron.interchainqueries.MsgRegisterInterchainQuery": {
        aminoType: string;
        toAmino: ({ queryType, keys, transactionsFilter, connectionId, updatePeriod, sender }: MsgRegisterInterchainQuery) => MsgRegisterInterchainQueryAminoType["value"];
        fromAmino: ({ query_type, keys, transactions_filter, connection_id, update_period, sender }: MsgRegisterInterchainQueryAminoType["value"]) => MsgRegisterInterchainQuery;
    };
    "/neutron.interchainqueries.MsgSubmitQueryResult": {
        aminoType: string;
        toAmino: ({ queryId, sender, clientId, result }: MsgSubmitQueryResult) => MsgSubmitQueryResultAminoType["value"];
        fromAmino: ({ query_id, sender, client_id, result }: MsgSubmitQueryResultAminoType["value"]) => MsgSubmitQueryResult;
    };
    "/neutron.interchainqueries.MsgRemoveInterchainQueryRequest": {
        aminoType: string;
        toAmino: ({ queryId, sender }: MsgRemoveInterchainQueryRequest) => MsgRemoveInterchainQueryRequestAminoType["value"];
        fromAmino: ({ query_id, sender }: MsgRemoveInterchainQueryRequestAminoType["value"]) => MsgRemoveInterchainQueryRequest;
    };
    "/neutron.interchainqueries.MsgUpdateInterchainQueryRequest": {
        aminoType: string;
        toAmino: ({ queryId, newKeys, newUpdatePeriod, newTransactionsFilter, sender }: MsgUpdateInterchainQueryRequest) => MsgUpdateInterchainQueryRequestAminoType["value"];
        fromAmino: ({ query_id, new_keys, new_update_period, new_transactions_filter, sender }: MsgUpdateInterchainQueryRequestAminoType["value"]) => MsgUpdateInterchainQueryRequest;
    };
};
