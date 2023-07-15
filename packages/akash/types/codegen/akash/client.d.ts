import { GeneratedType, Registry, OfflineSigner } from "@cosmjs/proto-signing";
import { AminoTypes, SigningStargateClient } from "@cosmjs/stargate";
import { HttpEndpoint } from "@cosmjs/tendermint-rpc";
export declare const akashAminoConverters: {
    "/akash.provider.v1beta2.MsgCreateProvider": {
        aminoType: string;
        toAmino: ({ owner, hostUri, attributes, info }: import("./provider/v1beta2/provider").MsgCreateProvider) => {
            owner: string;
            host_uri: string;
            attributes: {
                key: string;
                value: string;
            }[];
            info: {
                email: string;
                website: string;
            };
        };
        fromAmino: ({ owner, host_uri, attributes, info }: {
            owner: string;
            host_uri: string;
            attributes: {
                key: string;
                value: string;
            }[];
            info: {
                email: string;
                website: string;
            };
        }) => import("./provider/v1beta2/provider").MsgCreateProvider;
    };
    "/akash.provider.v1beta2.MsgUpdateProvider": {
        aminoType: string;
        toAmino: ({ owner, hostUri, attributes, info }: import("./provider/v1beta2/provider").MsgUpdateProvider) => {
            owner: string;
            host_uri: string;
            attributes: {
                key: string;
                value: string;
            }[];
            info: {
                email: string;
                website: string;
            };
        };
        fromAmino: ({ owner, host_uri, attributes, info }: {
            owner: string;
            host_uri: string;
            attributes: {
                key: string;
                value: string;
            }[];
            info: {
                email: string;
                website: string;
            };
        }) => import("./provider/v1beta2/provider").MsgUpdateProvider;
    };
    "/akash.provider.v1beta2.MsgDeleteProvider": {
        aminoType: string;
        toAmino: ({ owner }: import("./provider/v1beta2/provider").MsgDeleteProvider) => {
            owner: string;
        };
        fromAmino: ({ owner }: {
            owner: string;
        }) => import("./provider/v1beta2/provider").MsgDeleteProvider;
    };
    "/akash.provider.v1beta1.MsgCreateProvider": {
        aminoType: string;
        toAmino: ({ owner, hostUri, attributes, info }: import("./provider/v1beta1/provider").MsgCreateProvider) => {
            owner: string;
            host_uri: string;
            attributes: {
                key: string;
                value: string;
            }[];
            info: {
                email: string;
                website: string;
            };
        };
        fromAmino: ({ owner, host_uri, attributes, info }: {
            owner: string;
            host_uri: string;
            attributes: {
                key: string;
                value: string;
            }[];
            info: {
                email: string;
                website: string;
            };
        }) => import("./provider/v1beta1/provider").MsgCreateProvider;
    };
    "/akash.provider.v1beta1.MsgUpdateProvider": {
        aminoType: string;
        toAmino: ({ owner, hostUri, attributes, info }: import("./provider/v1beta1/provider").MsgUpdateProvider) => {
            owner: string;
            host_uri: string;
            attributes: {
                key: string;
                value: string;
            }[];
            info: {
                email: string;
                website: string;
            };
        };
        fromAmino: ({ owner, host_uri, attributes, info }: {
            owner: string;
            host_uri: string;
            attributes: {
                key: string;
                value: string;
            }[];
            info: {
                email: string;
                website: string;
            };
        }) => import("./provider/v1beta1/provider").MsgUpdateProvider;
    };
    "/akash.provider.v1beta1.MsgDeleteProvider": {
        aminoType: string;
        toAmino: ({ owner }: import("./provider/v1beta1/provider").MsgDeleteProvider) => {
            owner: string;
        };
        fromAmino: ({ owner }: {
            owner: string;
        }) => import("./provider/v1beta1/provider").MsgDeleteProvider;
    };
    "/akash.market.v1beta2.MsgCreateBid": {
        aminoType: string;
        toAmino: ({ order, provider, price, deposit }: import("./market/v1beta2/bid").MsgCreateBid) => {
            order: {
                owner: string;
                dseq: string;
                gseq: number;
                oseq: number;
            };
            provider: string;
            price: {
                denom: string;
                amount: string;
            };
            deposit: {
                denom: string;
                amount: string;
            };
        };
        fromAmino: ({ order, provider, price, deposit }: {
            order: {
                owner: string;
                dseq: string;
                gseq: number;
                oseq: number;
            };
            provider: string;
            price: {
                denom: string;
                amount: string;
            };
            deposit: {
                denom: string;
                amount: string;
            };
        }) => import("./market/v1beta2/bid").MsgCreateBid;
    };
    "/akash.market.v1beta2.MsgCloseBid": {
        aminoType: string;
        toAmino: ({ bidId }: import("./market/v1beta2/bid").MsgCloseBid) => {
            bid_id: {
                owner: string;
                dseq: string;
                gseq: number;
                oseq: number;
                provider: string;
            };
        };
        fromAmino: ({ bid_id }: {
            bid_id: {
                owner: string;
                dseq: string;
                gseq: number;
                oseq: number;
                provider: string;
            };
        }) => import("./market/v1beta2/bid").MsgCloseBid;
    };
    "/akash.market.v1beta2.MsgWithdrawLease": {
        aminoType: string;
        toAmino: ({ bidId }: import("./market/v1beta2/lease").MsgWithdrawLease) => {
            bid_id: {
                owner: string;
                dseq: string;
                gseq: number;
                oseq: number;
                provider: string;
            };
        };
        fromAmino: ({ bid_id }: {
            bid_id: {
                owner: string;
                dseq: string;
                gseq: number;
                oseq: number;
                provider: string;
            };
        }) => import("./market/v1beta2/lease").MsgWithdrawLease;
    };
    "/akash.market.v1beta2.MsgCreateLease": {
        aminoType: string;
        toAmino: ({ bidId }: import("./market/v1beta2/lease").MsgCreateLease) => {
            bid_id: {
                owner: string;
                dseq: string;
                gseq: number;
                oseq: number;
                provider: string;
            };
        };
        fromAmino: ({ bid_id }: {
            bid_id: {
                owner: string;
                dseq: string;
                gseq: number;
                oseq: number;
                provider: string;
            };
        }) => import("./market/v1beta2/lease").MsgCreateLease;
    };
    "/akash.market.v1beta2.MsgCloseLease": {
        aminoType: string;
        toAmino: ({ leaseId }: import("./market/v1beta2/lease").MsgCloseLease) => {
            lease_id: {
                owner: string;
                dseq: string;
                gseq: number;
                oseq: number;
                provider: string;
            };
        };
        fromAmino: ({ lease_id }: {
            lease_id: {
                owner: string;
                dseq: string;
                gseq: number;
                oseq: number;
                provider: string;
            };
        }) => import("./market/v1beta2/lease").MsgCloseLease;
    };
    "/akash.deployment.v1beta2.MsgCreateDeployment": {
        aminoType: string;
        toAmino: ({ id, groups, version, deposit, depositor }: import("./deployment/v1beta2/deploymentmsg").MsgCreateDeployment) => {
            id: {
                owner: string;
                dseq: string;
            };
            groups: {
                name: string;
                requirements: {
                    signed_by: {
                        all_of: string[];
                        any_of: string[];
                    };
                    attributes: {
                        key: string;
                        value: string;
                    }[];
                };
                resources: {
                    resources: {
                        cpu: {
                            units: {
                                val: Uint8Array;
                            };
                            attributes: {
                                key: string;
                                value: string;
                            }[];
                        };
                        memory: {
                            quantity: {
                                val: Uint8Array;
                            };
                            attributes: {
                                key: string;
                                value: string;
                            }[];
                        };
                        storage: {
                            name: string;
                            quantity: {
                                val: Uint8Array;
                            };
                            attributes: {
                                key: string;
                                value: string;
                            }[];
                        }[];
                        endpoints: {
                            kind: number;
                            sequence_number: number;
                        }[];
                    };
                    count: number;
                    price: {
                        denom: string;
                        amount: string;
                    };
                }[];
            }[];
            version: Uint8Array;
            deposit: {
                denom: string;
                amount: string;
            };
            depositor: string;
        };
        fromAmino: ({ id, groups, version, deposit, depositor }: {
            id: {
                owner: string;
                dseq: string;
            };
            groups: {
                name: string;
                requirements: {
                    signed_by: {
                        all_of: string[];
                        any_of: string[];
                    };
                    attributes: {
                        key: string;
                        value: string;
                    }[];
                };
                resources: {
                    resources: {
                        cpu: {
                            units: {
                                val: Uint8Array;
                            };
                            attributes: {
                                key: string;
                                value: string;
                            }[];
                        };
                        memory: {
                            quantity: {
                                val: Uint8Array;
                            };
                            attributes: {
                                key: string;
                                value: string;
                            }[];
                        };
                        storage: {
                            name: string;
                            quantity: {
                                val: Uint8Array;
                            };
                            attributes: {
                                key: string;
                                value: string;
                            }[];
                        }[];
                        endpoints: {
                            kind: number;
                            sequence_number: number;
                        }[];
                    };
                    count: number;
                    price: {
                        denom: string;
                        amount: string;
                    };
                }[];
            }[];
            version: Uint8Array;
            deposit: {
                denom: string;
                amount: string;
            };
            depositor: string;
        }) => import("./deployment/v1beta2/deploymentmsg").MsgCreateDeployment;
    };
    "/akash.deployment.v1beta2.MsgDepositDeployment": {
        aminoType: string;
        toAmino: ({ id, amount, depositor }: import("./deployment/v1beta2/deploymentmsg").MsgDepositDeployment) => {
            id: {
                owner: string;
                dseq: string;
            };
            amount: {
                denom: string;
                amount: string;
            };
            depositor: string;
        };
        fromAmino: ({ id, amount, depositor }: {
            id: {
                owner: string;
                dseq: string;
            };
            amount: {
                denom: string;
                amount: string;
            };
            depositor: string;
        }) => import("./deployment/v1beta2/deploymentmsg").MsgDepositDeployment;
    };
    "/akash.deployment.v1beta2.MsgUpdateDeployment": {
        aminoType: string;
        toAmino: ({ id, version }: import("./deployment/v1beta2/deploymentmsg").MsgUpdateDeployment) => {
            id: {
                owner: string;
                dseq: string;
            };
            version: Uint8Array;
        };
        fromAmino: ({ id, version }: {
            id: {
                owner: string;
                dseq: string;
            };
            version: Uint8Array;
        }) => import("./deployment/v1beta2/deploymentmsg").MsgUpdateDeployment;
    };
    "/akash.deployment.v1beta2.MsgCloseDeployment": {
        aminoType: string;
        toAmino: ({ id }: import("./deployment/v1beta2/deploymentmsg").MsgCloseDeployment) => {
            id: {
                owner: string;
                dseq: string;
            };
        };
        fromAmino: ({ id }: {
            id: {
                owner: string;
                dseq: string;
            };
        }) => import("./deployment/v1beta2/deploymentmsg").MsgCloseDeployment;
    };
    "/akash.deployment.v1beta2.MsgCloseGroup": {
        aminoType: string;
        toAmino: ({ id }: import("./deployment/v1beta2/groupmsg").MsgCloseGroup) => {
            id: {
                owner: string;
                dseq: string;
                gseq: number;
            };
        };
        fromAmino: ({ id }: {
            id: {
                owner: string;
                dseq: string;
                gseq: number;
            };
        }) => import("./deployment/v1beta2/groupmsg").MsgCloseGroup;
    };
    "/akash.deployment.v1beta2.MsgPauseGroup": {
        aminoType: string;
        toAmino: ({ id }: import("./deployment/v1beta2/groupmsg").MsgPauseGroup) => {
            id: {
                owner: string;
                dseq: string;
                gseq: number;
            };
        };
        fromAmino: ({ id }: {
            id: {
                owner: string;
                dseq: string;
                gseq: number;
            };
        }) => import("./deployment/v1beta2/groupmsg").MsgPauseGroup;
    };
    "/akash.deployment.v1beta2.MsgStartGroup": {
        aminoType: string;
        toAmino: ({ id }: import("./deployment/v1beta2/groupmsg").MsgStartGroup) => {
            id: {
                owner: string;
                dseq: string;
                gseq: number;
            };
        };
        fromAmino: ({ id }: {
            id: {
                owner: string;
                dseq: string;
                gseq: number;
            };
        }) => import("./deployment/v1beta2/groupmsg").MsgStartGroup;
    };
    "/akash.deployment.v1beta1.MsgCreateDeployment": {
        aminoType: string;
        toAmino: ({ id, groups, version, deposit }: import("./deployment/v1beta1/deployment").MsgCreateDeployment) => {
            id: {
                owner: string;
                dseq: string;
            };
            groups: {
                name: string;
                requirements: {
                    signed_by: {
                        all_of: string[];
                        any_of: string[];
                    };
                    attributes: {
                        key: string;
                        value: string;
                    }[];
                };
                resources: {
                    resources: {
                        cpu: {
                            units: {
                                val: Uint8Array;
                            };
                            attributes: {
                                key: string;
                                value: string;
                            }[];
                        };
                        memory: {
                            quantity: {
                                val: Uint8Array;
                            };
                            attributes: {
                                key: string;
                                value: string;
                            }[];
                        };
                        storage: {
                            quantity: {
                                val: Uint8Array;
                            };
                            attributes: {
                                key: string;
                                value: string;
                            }[];
                        };
                        endpoints: {
                            kind: number;
                        }[];
                    };
                    count: number;
                    price: {
                        denom: string;
                        amount: string;
                    };
                }[];
            }[];
            version: Uint8Array;
            deposit: {
                denom: string;
                amount: string;
            };
        };
        fromAmino: ({ id, groups, version, deposit }: {
            id: {
                owner: string;
                dseq: string;
            };
            groups: {
                name: string;
                requirements: {
                    signed_by: {
                        all_of: string[];
                        any_of: string[];
                    };
                    attributes: {
                        key: string;
                        value: string;
                    }[];
                };
                resources: {
                    resources: {
                        cpu: {
                            units: {
                                val: Uint8Array;
                            };
                            attributes: {
                                key: string;
                                value: string;
                            }[];
                        };
                        memory: {
                            quantity: {
                                val: Uint8Array;
                            };
                            attributes: {
                                key: string;
                                value: string;
                            }[];
                        };
                        storage: {
                            quantity: {
                                val: Uint8Array;
                            };
                            attributes: {
                                key: string;
                                value: string;
                            }[];
                        };
                        endpoints: {
                            kind: number;
                        }[];
                    };
                    count: number;
                    price: {
                        denom: string;
                        amount: string;
                    };
                }[];
            }[];
            version: Uint8Array;
            deposit: {
                denom: string;
                amount: string;
            };
        }) => import("./deployment/v1beta1/deployment").MsgCreateDeployment;
    };
    "/akash.deployment.v1beta1.MsgDepositDeployment": {
        aminoType: string;
        toAmino: ({ id, amount }: import("./deployment/v1beta1/deployment").MsgDepositDeployment) => {
            id: {
                owner: string;
                dseq: string;
            };
            amount: {
                denom: string;
                amount: string;
            };
        };
        fromAmino: ({ id, amount }: {
            id: {
                owner: string;
                dseq: string;
            };
            amount: {
                denom: string;
                amount: string;
            };
        }) => import("./deployment/v1beta1/deployment").MsgDepositDeployment;
    };
    "/akash.deployment.v1beta1.MsgUpdateDeployment": {
        aminoType: string;
        toAmino: ({ id, groups, version }: import("./deployment/v1beta1/deployment").MsgUpdateDeployment) => {
            id: {
                owner: string;
                dseq: string;
            };
            groups: {
                name: string;
                requirements: {
                    signed_by: {
                        all_of: string[];
                        any_of: string[];
                    };
                    attributes: {
                        key: string;
                        value: string;
                    }[];
                };
                resources: {
                    resources: {
                        cpu: {
                            units: {
                                val: Uint8Array;
                            };
                            attributes: {
                                key: string;
                                value: string;
                            }[];
                        };
                        memory: {
                            quantity: {
                                val: Uint8Array;
                            };
                            attributes: {
                                key: string;
                                value: string;
                            }[];
                        };
                        storage: {
                            quantity: {
                                val: Uint8Array;
                            };
                            attributes: {
                                key: string;
                                value: string;
                            }[];
                        };
                        endpoints: {
                            kind: number;
                        }[];
                    };
                    count: number;
                    price: {
                        denom: string;
                        amount: string;
                    };
                }[];
            }[];
            version: Uint8Array;
        };
        fromAmino: ({ id, groups, version }: {
            id: {
                owner: string;
                dseq: string;
            };
            groups: {
                name: string;
                requirements: {
                    signed_by: {
                        all_of: string[];
                        any_of: string[];
                    };
                    attributes: {
                        key: string;
                        value: string;
                    }[];
                };
                resources: {
                    resources: {
                        cpu: {
                            units: {
                                val: Uint8Array;
                            };
                            attributes: {
                                key: string;
                                value: string;
                            }[];
                        };
                        memory: {
                            quantity: {
                                val: Uint8Array;
                            };
                            attributes: {
                                key: string;
                                value: string;
                            }[];
                        };
                        storage: {
                            quantity: {
                                val: Uint8Array;
                            };
                            attributes: {
                                key: string;
                                value: string;
                            }[];
                        };
                        endpoints: {
                            kind: number;
                        }[];
                    };
                    count: number;
                    price: {
                        denom: string;
                        amount: string;
                    };
                }[];
            }[];
            version: Uint8Array;
        }) => import("./deployment/v1beta1/deployment").MsgUpdateDeployment;
    };
    "/akash.deployment.v1beta1.MsgCloseDeployment": {
        aminoType: string;
        toAmino: ({ id }: import("./deployment/v1beta1/deployment").MsgCloseDeployment) => {
            id: {
                owner: string;
                dseq: string;
            };
        };
        fromAmino: ({ id }: {
            id: {
                owner: string;
                dseq: string;
            };
        }) => import("./deployment/v1beta1/deployment").MsgCloseDeployment;
    };
    "/akash.deployment.v1beta1.MsgCloseGroup": {
        aminoType: string;
        toAmino: ({ id }: import("./deployment/v1beta1/group").MsgCloseGroup) => {
            id: {
                owner: string;
                dseq: string;
                gseq: number;
            };
        };
        fromAmino: ({ id }: {
            id: {
                owner: string;
                dseq: string;
                gseq: number;
            };
        }) => import("./deployment/v1beta1/group").MsgCloseGroup;
    };
    "/akash.deployment.v1beta1.MsgPauseGroup": {
        aminoType: string;
        toAmino: ({ id }: import("./deployment/v1beta1/group").MsgPauseGroup) => {
            id: {
                owner: string;
                dseq: string;
                gseq: number;
            };
        };
        fromAmino: ({ id }: {
            id: {
                owner: string;
                dseq: string;
                gseq: number;
            };
        }) => import("./deployment/v1beta1/group").MsgPauseGroup;
    };
    "/akash.deployment.v1beta1.MsgStartGroup": {
        aminoType: string;
        toAmino: ({ id }: import("./deployment/v1beta1/group").MsgStartGroup) => {
            id: {
                owner: string;
                dseq: string;
                gseq: number;
            };
        };
        fromAmino: ({ id }: {
            id: {
                owner: string;
                dseq: string;
                gseq: number;
            };
        }) => import("./deployment/v1beta1/group").MsgStartGroup;
    };
    "/akash.cert.v1beta2.MsgCreateCertificate": {
        aminoType: string;
        toAmino: ({ owner, cert, pubkey }: import("./cert/v1beta2/cert").MsgCreateCertificate) => {
            owner: string;
            cert: Uint8Array;
            pubkey: Uint8Array;
        };
        fromAmino: ({ owner, cert, pubkey }: {
            owner: string;
            cert: Uint8Array;
            pubkey: Uint8Array;
        }) => import("./cert/v1beta2/cert").MsgCreateCertificate;
    };
    "/akash.cert.v1beta2.MsgRevokeCertificate": {
        aminoType: string;
        toAmino: ({ id }: import("./cert/v1beta2/cert").MsgRevokeCertificate) => {
            id: {
                owner: string;
                serial: string;
            };
        };
        fromAmino: ({ id }: {
            id: {
                owner: string;
                serial: string;
            };
        }) => import("./cert/v1beta2/cert").MsgRevokeCertificate;
    };
    "/akash.audit.v1beta2.MsgSignProviderAttributes": {
        aminoType: string;
        toAmino: ({ owner, auditor, attributes }: import("./audit/v1beta2/audit").MsgSignProviderAttributes) => {
            owner: string;
            auditor: string;
            attributes: {
                key: string;
                value: string;
            }[];
        };
        fromAmino: ({ owner, auditor, attributes }: {
            owner: string;
            auditor: string;
            attributes: {
                key: string;
                value: string;
            }[];
        }) => import("./audit/v1beta2/audit").MsgSignProviderAttributes;
    };
    "/akash.audit.v1beta2.MsgDeleteProviderAttributes": {
        aminoType: string;
        toAmino: ({ owner, auditor, keys }: import("./audit/v1beta2/audit").MsgDeleteProviderAttributes) => {
            owner: string;
            auditor: string;
            keys: string[];
        };
        fromAmino: ({ owner, auditor, keys }: {
            owner: string;
            auditor: string;
            keys: string[];
        }) => import("./audit/v1beta2/audit").MsgDeleteProviderAttributes;
    };
    "/akash.audit.v1beta1.MsgSignProviderAttributes": {
        aminoType: string;
        toAmino: ({ owner, auditor, attributes }: import("./audit/v1beta1/audit").MsgSignProviderAttributes) => {
            owner: string;
            auditor: string;
            attributes: {
                key: string;
                value: string;
            }[];
        };
        fromAmino: ({ owner, auditor, attributes }: {
            owner: string;
            auditor: string;
            attributes: {
                key: string;
                value: string;
            }[];
        }) => import("./audit/v1beta1/audit").MsgSignProviderAttributes;
    };
    "/akash.audit.v1beta1.MsgDeleteProviderAttributes": {
        aminoType: string;
        toAmino: ({ owner, auditor, keys }: import("./audit/v1beta1/audit").MsgDeleteProviderAttributes) => {
            owner: string;
            auditor: string;
            keys: string[];
        };
        fromAmino: ({ owner, auditor, keys }: {
            owner: string;
            auditor: string;
            keys: string[];
        }) => import("./audit/v1beta1/audit").MsgDeleteProviderAttributes;
    };
};
export declare const akashProtoRegistry: ReadonlyArray<[string, GeneratedType]>;
export declare const getSigningAkashClientOptions: ({ defaultTypes }?: {
    defaultTypes?: ReadonlyArray<[string, GeneratedType]>;
}) => {
    registry: Registry;
    aminoTypes: AminoTypes;
};
export declare const getSigningAkashClient: ({ rpcEndpoint, signer, defaultTypes }: {
    rpcEndpoint: string | HttpEndpoint;
    signer: OfflineSigner;
    defaultTypes?: ReadonlyArray<[string, GeneratedType]>;
}) => Promise<SigningStargateClient>;
