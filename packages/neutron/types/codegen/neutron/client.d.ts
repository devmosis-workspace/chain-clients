import { GeneratedType, Registry, OfflineSigner } from "@cosmjs/proto-signing";
import { AminoTypes, SigningStargateClient } from "@cosmjs/stargate";
import { HttpEndpoint } from "@cosmjs/tendermint-rpc";
export declare const neutronAminoConverters: {
    "/neutron.transfer.MsgTransfer": {
        aminoType: string;
        toAmino: ({ sourcePort, sourceChannel, token, sender, receiver, timeoutHeight, timeoutTimestamp, memo, fee }: import("../transfer/v1/tx").MsgTransfer) => {
            source_port: string;
            source_channel: string;
            token: {
                denom: string;
                amount: string;
            };
            sender: string;
            receiver: string;
            timeout_height: import("../helpers").AminoHeight;
            timeout_timestamp: string;
            memo: string;
            fee: {
                recv_fee: {
                    denom: string;
                    amount: string;
                }[];
                ack_fee: {
                    denom: string;
                    amount: string;
                }[];
                timeout_fee: {
                    denom: string;
                    amount: string;
                }[];
            };
        };
        fromAmino: ({ source_port, source_channel, token, sender, receiver, timeout_height, timeout_timestamp, memo, fee }: {
            source_port: string;
            source_channel: string;
            token: {
                denom: string;
                amount: string;
            };
            sender: string;
            receiver: string;
            timeout_height: import("../helpers").AminoHeight;
            timeout_timestamp: string;
            memo: string;
            fee: {
                recv_fee: {
                    denom: string;
                    amount: string;
                }[];
                ack_fee: {
                    denom: string;
                    amount: string;
                }[];
                timeout_fee: {
                    denom: string;
                    amount: string;
                }[];
            };
        }) => import("../transfer/v1/tx").MsgTransfer;
    };
    "/neutron.interchaintxs.v1.MsgRegisterInterchainAccount": {
        aminoType: string;
        toAmino: ({ fromAddress, connectionId, interchainAccountId }: import("../interchaintxs/v1/tx").MsgRegisterInterchainAccount) => {
            from_address: string;
            connection_id: string;
            interchain_account_id: string;
        };
        fromAmino: ({ from_address, connection_id, interchain_account_id }: {
            from_address: string;
            connection_id: string;
            interchain_account_id: string;
        }) => import("../interchaintxs/v1/tx").MsgRegisterInterchainAccount;
    };
    "/neutron.interchaintxs.v1.MsgSubmitTx": {
        aminoType: string;
        toAmino: ({ fromAddress, interchainAccountId, connectionId, msgs, memo, timeout, fee }: import("../interchaintxs/v1/tx").MsgSubmitTx) => {
            from_address: string;
            interchain_account_id: string;
            connection_id: string;
            msgs: {
                type_url: string;
                value: Uint8Array;
            }[];
            memo: string;
            timeout: string;
            fee: {
                recv_fee: {
                    denom: string;
                    amount: string;
                }[];
                ack_fee: {
                    denom: string;
                    amount: string;
                }[];
                timeout_fee: {
                    denom: string;
                    amount: string;
                }[];
            };
        };
        fromAmino: ({ from_address, interchain_account_id, connection_id, msgs, memo, timeout, fee }: {
            from_address: string;
            interchain_account_id: string;
            connection_id: string;
            msgs: {
                type_url: string;
                value: Uint8Array;
            }[];
            memo: string;
            timeout: string;
            fee: {
                recv_fee: {
                    denom: string;
                    amount: string;
                }[];
                ack_fee: {
                    denom: string;
                    amount: string;
                }[];
                timeout_fee: {
                    denom: string;
                    amount: string;
                }[];
            };
        }) => import("../interchaintxs/v1/tx").MsgSubmitTx;
    };
    "/neutron.interchainqueries.MsgRegisterInterchainQuery": {
        aminoType: string;
        toAmino: ({ queryType, keys, transactionsFilter, connectionId, updatePeriod, sender }: import("../interchainqueries/tx").MsgRegisterInterchainQuery) => {
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
        fromAmino: ({ query_type, keys, transactions_filter, connection_id, update_period, sender }: {
            query_type: string;
            keys: {
                path: string;
                key: Uint8Array;
            }[];
            transactions_filter: string;
            connection_id: string;
            update_period: string;
            sender: string;
        }) => import("../interchainqueries/tx").MsgRegisterInterchainQuery;
    };
    "/neutron.interchainqueries.MsgSubmitQueryResult": {
        aminoType: string;
        toAmino: ({ queryId, sender, clientId, result }: import("../interchainqueries/tx").MsgSubmitQueryResult) => {
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
        fromAmino: ({ query_id, sender, client_id, result }: {
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
        }) => import("../interchainqueries/tx").MsgSubmitQueryResult;
    };
    "/neutron.interchainqueries.MsgRemoveInterchainQueryRequest": {
        aminoType: string;
        toAmino: ({ queryId, sender }: import("../interchainqueries/tx").MsgRemoveInterchainQueryRequest) => {
            query_id: string;
            sender: string;
        };
        fromAmino: ({ query_id, sender }: {
            query_id: string;
            sender: string;
        }) => import("../interchainqueries/tx").MsgRemoveInterchainQueryRequest;
    };
    "/neutron.interchainqueries.MsgUpdateInterchainQueryRequest": {
        aminoType: string;
        toAmino: ({ queryId, newKeys, newUpdatePeriod, newTransactionsFilter, sender }: import("../interchainqueries/tx").MsgUpdateInterchainQueryRequest) => {
            query_id: string;
            new_keys: {
                path: string;
                key: Uint8Array;
            }[];
            new_update_period: string;
            new_transactions_filter: string;
            sender: string;
        };
        fromAmino: ({ query_id, new_keys, new_update_period, new_transactions_filter, sender }: {
            query_id: string;
            new_keys: {
                path: string;
                key: Uint8Array;
            }[];
            new_update_period: string;
            new_transactions_filter: string;
            sender: string;
        }) => import("../interchainqueries/tx").MsgUpdateInterchainQueryRequest;
    };
};
export declare const neutronProtoRegistry: ReadonlyArray<[string, GeneratedType]>;
export declare const getSigningNeutronClientOptions: ({ defaultTypes }?: {
    defaultTypes?: ReadonlyArray<[string, GeneratedType]>;
}) => {
    registry: Registry;
    aminoTypes: AminoTypes;
};
export declare const getSigningNeutronClient: ({ rpcEndpoint, signer, defaultTypes }: {
    rpcEndpoint: string | HttpEndpoint;
    signer: OfflineSigner;
    defaultTypes?: ReadonlyArray<[string, GeneratedType]>;
}) => Promise<SigningStargateClient>;
