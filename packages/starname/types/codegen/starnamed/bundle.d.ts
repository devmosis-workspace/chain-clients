import * as _6 from "../iov/configuration/v1beta1/msgs";
import * as _7 from "../iov/configuration/v1beta1/query";
import * as _8 from "../iov/configuration/v1beta1/types";
import * as _9 from "../iov/escrow/v1beta1/events";
import * as _10 from "../iov/escrow/v1beta1/genesis";
import * as _11 from "../iov/escrow/v1beta1/params";
import * as _12 from "../iov/escrow/v1beta1/query";
import * as _13 from "../iov/escrow/v1beta1/test";
import * as _14 from "../iov/escrow/v1beta1/tx";
import * as _15 from "../iov/escrow/v1beta1/types";
import * as _16 from "../iov/starname/v1beta1/genesis";
import * as _17 from "../iov/starname/v1beta1/query";
import * as _18 from "../iov/starname/v1beta1/tx";
import * as _19 from "../iov/starname/v1beta1/types";
import * as _142 from "../iov/configuration/v1beta1/query.rpc.Query";
import * as _143 from "../iov/escrow/v1beta1/query.rpc.Query";
import * as _144 from "../iov/starname/v1beta1/query.rpc.Query";
import * as _145 from "../iov/escrow/v1beta1/tx.rpc.msg";
import * as _146 from "../iov/starname/v1beta1/tx.rpc.msg";
export declare namespace starnamed {
    namespace x {
        namespace configuration {
            const v1beta1: {
                QueryClientImpl: typeof _142.QueryClientImpl;
                createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                    config(request?: _7.QueryConfigRequest): Promise<_7.QueryConfigResponse>;
                    fees(request?: _7.QueryFeesRequest): Promise<_7.QueryFeesResponse>;
                };
                Config: {
                    encode(message: _8.Config, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _8.Config;
                    fromPartial(object: Partial<_8.Config>): _8.Config;
                };
                Fees: {
                    encode(message: _8.Fees, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _8.Fees;
                    fromPartial(object: Partial<_8.Fees>): _8.Fees;
                };
                GenesisState: {
                    encode(message: _8.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _8.GenesisState;
                    fromPartial(object: Partial<_8.GenesisState>): _8.GenesisState;
                };
                QueryConfigRequest: {
                    encode(_: _7.QueryConfigRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(_: any): _7.QueryConfigRequest;
                    fromPartial(_: Partial<_7.QueryConfigRequest>): _7.QueryConfigRequest;
                };
                QueryConfigResponse: {
                    encode(message: _7.QueryConfigResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _7.QueryConfigResponse;
                    fromPartial(object: Partial<_7.QueryConfigResponse>): _7.QueryConfigResponse;
                };
                QueryFeesRequest: {
                    encode(_: _7.QueryFeesRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(_: any): _7.QueryFeesRequest;
                    fromPartial(_: Partial<_7.QueryFeesRequest>): _7.QueryFeesRequest;
                };
                QueryFeesResponse: {
                    encode(message: _7.QueryFeesResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _7.QueryFeesResponse;
                    fromPartial(object: Partial<_7.QueryFeesResponse>): _7.QueryFeesResponse;
                };
                MsgUpdateConfig: {
                    encode(message: _6.MsgUpdateConfig, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _6.MsgUpdateConfig;
                    fromPartial(object: Partial<_6.MsgUpdateConfig>): _6.MsgUpdateConfig;
                };
                MsgUpdateFees: {
                    encode(message: _6.MsgUpdateFees, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _6.MsgUpdateFees;
                    fromPartial(object: Partial<_6.MsgUpdateFees>): _6.MsgUpdateFees;
                };
            };
        }
        namespace escrow {
            const v1beta1: {
                MsgClientImpl: typeof _145.MsgClientImpl;
                QueryClientImpl: typeof _143.QueryClientImpl;
                createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                    escrow(request: _12.QueryEscrowRequest): Promise<_12.QueryEscrowResponse>;
                    escrows(request: _12.QueryEscrowsRequest): Promise<_12.QueryEscrowsResponse>;
                };
                registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
                load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
                MessageComposer: {
                    encoded: {
                        createEscrow(value: _14.MsgCreateEscrow): {
                            typeUrl: string;
                            value: Uint8Array;
                        };
                        updateEscrow(value: _14.MsgUpdateEscrow): {
                            typeUrl: string;
                            value: Uint8Array;
                        };
                        transferToEscrow(value: _14.MsgTransferToEscrow): {
                            typeUrl: string;
                            value: Uint8Array;
                        };
                        refundEscrow(value: _14.MsgRefundEscrow): {
                            typeUrl: string;
                            value: Uint8Array;
                        };
                    };
                    withTypeUrl: {
                        createEscrow(value: _14.MsgCreateEscrow): {
                            typeUrl: string;
                            value: _14.MsgCreateEscrow;
                        };
                        updateEscrow(value: _14.MsgUpdateEscrow): {
                            typeUrl: string;
                            value: _14.MsgUpdateEscrow;
                        };
                        transferToEscrow(value: _14.MsgTransferToEscrow): {
                            typeUrl: string;
                            value: _14.MsgTransferToEscrow;
                        };
                        refundEscrow(value: _14.MsgRefundEscrow): {
                            typeUrl: string;
                            value: _14.MsgRefundEscrow;
                        };
                    };
                    fromJSON: {
                        createEscrow(value: any): {
                            typeUrl: string;
                            value: _14.MsgCreateEscrow;
                        };
                        updateEscrow(value: any): {
                            typeUrl: string;
                            value: _14.MsgUpdateEscrow;
                        };
                        transferToEscrow(value: any): {
                            typeUrl: string;
                            value: _14.MsgTransferToEscrow;
                        };
                        refundEscrow(value: any): {
                            typeUrl: string;
                            value: _14.MsgRefundEscrow;
                        };
                    };
                    fromPartial: {
                        createEscrow(value: _14.MsgCreateEscrow): {
                            typeUrl: string;
                            value: _14.MsgCreateEscrow;
                        };
                        updateEscrow(value: _14.MsgUpdateEscrow): {
                            typeUrl: string;
                            value: _14.MsgUpdateEscrow;
                        };
                        transferToEscrow(value: _14.MsgTransferToEscrow): {
                            typeUrl: string;
                            value: _14.MsgTransferToEscrow;
                        };
                        refundEscrow(value: _14.MsgRefundEscrow): {
                            typeUrl: string;
                            value: _14.MsgRefundEscrow;
                        };
                    };
                };
                AminoConverter: {
                    "/starnamed.x.escrow.v1beta1.MsgCreateEscrow": {
                        aminoType: string;
                        toAmino: ({ seller, feePayer, object, price, deadline }: _14.MsgCreateEscrow) => {
                            seller: string;
                            fee_payer: string;
                            object: {
                                type_url: string;
                                value: Uint8Array;
                            };
                            price: {
                                denom: string;
                                amount: string;
                            }[];
                            deadline: string;
                        };
                        fromAmino: ({ seller, fee_payer, object, price, deadline }: {
                            seller: string;
                            fee_payer: string;
                            object: {
                                type_url: string;
                                value: Uint8Array;
                            };
                            price: {
                                denom: string;
                                amount: string;
                            }[];
                            deadline: string;
                        }) => _14.MsgCreateEscrow;
                    };
                    "/starnamed.x.escrow.v1beta1.MsgUpdateEscrow": {
                        aminoType: string;
                        toAmino: ({ id, updater, feePayer, seller, price, deadline }: _14.MsgUpdateEscrow) => {
                            id: string;
                            updater: string;
                            fee_payer: string;
                            seller: string;
                            price: {
                                denom: string;
                                amount: string;
                            }[];
                            deadline: string;
                        };
                        fromAmino: ({ id, updater, fee_payer, seller, price, deadline }: {
                            id: string;
                            updater: string;
                            fee_payer: string;
                            seller: string;
                            price: {
                                denom: string;
                                amount: string;
                            }[];
                            deadline: string;
                        }) => _14.MsgUpdateEscrow;
                    };
                    "/starnamed.x.escrow.v1beta1.MsgTransferToEscrow": {
                        aminoType: string;
                        toAmino: ({ id, sender, feePayer, amount }: _14.MsgTransferToEscrow) => {
                            id: string;
                            sender: string;
                            fee_payer: string;
                            amount: {
                                denom: string;
                                amount: string;
                            }[];
                        };
                        fromAmino: ({ id, sender, fee_payer, amount }: {
                            id: string;
                            sender: string;
                            fee_payer: string;
                            amount: {
                                denom: string;
                                amount: string;
                            }[];
                        }) => _14.MsgTransferToEscrow;
                    };
                    "/starnamed.x.escrow.v1beta1.MsgRefundEscrow": {
                        aminoType: string;
                        toAmino: ({ id, sender, feePayer }: _14.MsgRefundEscrow) => {
                            id: string;
                            sender: string;
                            fee_payer: string;
                        };
                        fromAmino: ({ id, sender, fee_payer }: {
                            id: string;
                            sender: string;
                            fee_payer: string;
                        }) => _14.MsgRefundEscrow;
                    };
                };
                escrowStateFromJSON(object: any): _15.EscrowState;
                escrowStateToJSON(object: _15.EscrowState): string;
                EscrowState: typeof _15.EscrowState;
                EscrowStateSDKType: typeof _15.EscrowState;
                Escrow: {
                    encode(message: _15.Escrow, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _15.Escrow;
                    fromPartial(object: Partial<_15.Escrow>): _15.Escrow;
                };
                MsgCreateEscrow: {
                    encode(message: _14.MsgCreateEscrow, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _14.MsgCreateEscrow;
                    fromPartial(object: Partial<_14.MsgCreateEscrow>): _14.MsgCreateEscrow;
                };
                MsgCreateEscrowResponse: {
                    encode(message: _14.MsgCreateEscrowResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _14.MsgCreateEscrowResponse;
                    fromPartial(object: Partial<_14.MsgCreateEscrowResponse>): _14.MsgCreateEscrowResponse;
                };
                MsgUpdateEscrow: {
                    encode(message: _14.MsgUpdateEscrow, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _14.MsgUpdateEscrow;
                    fromPartial(object: Partial<_14.MsgUpdateEscrow>): _14.MsgUpdateEscrow;
                };
                MsgUpdateEscrowResponse: {
                    encode(_: _14.MsgUpdateEscrowResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(_: any): _14.MsgUpdateEscrowResponse;
                    fromPartial(_: Partial<_14.MsgUpdateEscrowResponse>): _14.MsgUpdateEscrowResponse;
                };
                MsgTransferToEscrow: {
                    encode(message: _14.MsgTransferToEscrow, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _14.MsgTransferToEscrow;
                    fromPartial(object: Partial<_14.MsgTransferToEscrow>): _14.MsgTransferToEscrow;
                };
                MsgTransferToEscrowResponse: {
                    encode(_: _14.MsgTransferToEscrowResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(_: any): _14.MsgTransferToEscrowResponse;
                    fromPartial(_: Partial<_14.MsgTransferToEscrowResponse>): _14.MsgTransferToEscrowResponse;
                };
                MsgRefundEscrow: {
                    encode(message: _14.MsgRefundEscrow, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _14.MsgRefundEscrow;
                    fromPartial(object: Partial<_14.MsgRefundEscrow>): _14.MsgRefundEscrow;
                };
                MsgRefundEscrowResponse: {
                    encode(_: _14.MsgRefundEscrowResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(_: any): _14.MsgRefundEscrowResponse;
                    fromPartial(_: Partial<_14.MsgRefundEscrowResponse>): _14.MsgRefundEscrowResponse;
                };
                TestObject: {
                    encode(message: _13.TestObject, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _13.TestObject;
                    fromPartial(object: Partial<_13.TestObject>): _13.TestObject;
                };
                TestTimeConstrainedObject: {
                    encode(message: _13.TestTimeConstrainedObject, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _13.TestTimeConstrainedObject;
                    fromPartial(object: Partial<_13.TestTimeConstrainedObject>): _13.TestTimeConstrainedObject;
                };
                QueryEscrowRequest: {
                    encode(message: _12.QueryEscrowRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _12.QueryEscrowRequest;
                    fromPartial(object: Partial<_12.QueryEscrowRequest>): _12.QueryEscrowRequest;
                };
                QueryEscrowResponse: {
                    encode(message: _12.QueryEscrowResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _12.QueryEscrowResponse;
                    fromPartial(object: Partial<_12.QueryEscrowResponse>): _12.QueryEscrowResponse;
                };
                QueryEscrowsRequest: {
                    encode(message: _12.QueryEscrowsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _12.QueryEscrowsRequest;
                    fromPartial(object: Partial<_12.QueryEscrowsRequest>): _12.QueryEscrowsRequest;
                };
                QueryEscrowsResponse: {
                    encode(message: _12.QueryEscrowsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _12.QueryEscrowsResponse;
                    fromPartial(object: Partial<_12.QueryEscrowsResponse>): _12.QueryEscrowsResponse;
                };
                Params: {
                    encode(message: _11.Params, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _11.Params;
                    fromPartial(object: Partial<_11.Params>): _11.Params;
                };
                GenesisState: {
                    encode(message: _10.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _10.GenesisState;
                    fromPartial(object: Partial<_10.GenesisState>): _10.GenesisState;
                };
                EventCreatedEscrow: {
                    encode(message: _9.EventCreatedEscrow, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _9.EventCreatedEscrow;
                    fromPartial(object: Partial<_9.EventCreatedEscrow>): _9.EventCreatedEscrow;
                };
                EventUpdatedEscrow: {
                    encode(message: _9.EventUpdatedEscrow, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _9.EventUpdatedEscrow;
                    fromPartial(object: Partial<_9.EventUpdatedEscrow>): _9.EventUpdatedEscrow;
                };
                EventCompletedEscrow: {
                    encode(message: _9.EventCompletedEscrow, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _9.EventCompletedEscrow;
                    fromPartial(object: Partial<_9.EventCompletedEscrow>): _9.EventCompletedEscrow;
                };
                EventRefundedEscrow: {
                    encode(message: _9.EventRefundedEscrow, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _9.EventRefundedEscrow;
                    fromPartial(object: Partial<_9.EventRefundedEscrow>): _9.EventRefundedEscrow;
                };
            };
        }
        namespace starname {
            const v1beta1: {
                MsgClientImpl: typeof _146.MsgClientImpl;
                QueryClientImpl: typeof _144.QueryClientImpl;
                createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                    domain(request: _17.QueryDomainRequest): Promise<_17.QueryDomainResponse>;
                    domainAccounts(request: _17.QueryDomainAccountsRequest): Promise<_17.QueryDomainAccountsResponse>;
                    starname(request: _17.QueryStarnameRequest): Promise<_17.QueryStarnameResponse>;
                    ownerAccounts(request: _17.QueryOwnerAccountsRequest): Promise<_17.QueryOwnerAccountsResponse>;
                    ownerDomains(request: _17.QueryOwnerDomainsRequest): Promise<_17.QueryOwnerDomainsResponse>;
                    resourceAccounts(request: _17.QueryResourceAccountsRequest): Promise<_17.QueryResourceAccountsResponse>;
                    brokerAccounts(request: _17.QueryBrokerAccountsRequest): Promise<_17.QueryBrokerAccountsResponse>;
                    brokerDomains(request: _17.QueryBrokerDomainsRequest): Promise<_17.QueryBrokerDomainsResponse>;
                    yield(request?: _17.QueryYieldRequest): Promise<_17.QueryYieldResponse>;
                };
                registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
                load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
                MessageComposer: {
                    encoded: {
                        addAccountCertificate(value: _18.MsgAddAccountCertificate): {
                            typeUrl: string;
                            value: Uint8Array;
                        };
                        deleteAccount(value: _18.MsgDeleteAccount): {
                            typeUrl: string;
                            value: Uint8Array;
                        };
                        deleteAccountCertificate(value: _18.MsgDeleteAccountCertificate): {
                            typeUrl: string;
                            value: Uint8Array;
                        };
                        deleteDomain(value: _18.MsgDeleteDomain): {
                            typeUrl: string;
                            value: Uint8Array;
                        };
                        registerAccount(value: _18.MsgRegisterAccount): {
                            typeUrl: string;
                            value: Uint8Array;
                        };
                        registerDomain(value: _18.MsgRegisterDomain): {
                            typeUrl: string;
                            value: Uint8Array;
                        };
                        renewAccount(value: _18.MsgRenewAccount): {
                            typeUrl: string;
                            value: Uint8Array;
                        };
                        renewDomain(value: _18.MsgRenewDomain): {
                            typeUrl: string;
                            value: Uint8Array;
                        };
                        replaceAccountMetadata(value: _18.MsgReplaceAccountMetadata): {
                            typeUrl: string;
                            value: Uint8Array;
                        };
                        replaceAccountResources(value: _18.MsgReplaceAccountResources): {
                            typeUrl: string;
                            value: Uint8Array;
                        };
                        transferAccount(value: _18.MsgTransferAccount): {
                            typeUrl: string;
                            value: Uint8Array;
                        };
                        transferDomain(value: _18.MsgTransferDomain): {
                            typeUrl: string;
                            value: Uint8Array;
                        };
                    };
                    withTypeUrl: {
                        addAccountCertificate(value: _18.MsgAddAccountCertificate): {
                            typeUrl: string;
                            value: _18.MsgAddAccountCertificate;
                        };
                        deleteAccount(value: _18.MsgDeleteAccount): {
                            typeUrl: string;
                            value: _18.MsgDeleteAccount;
                        };
                        deleteAccountCertificate(value: _18.MsgDeleteAccountCertificate): {
                            typeUrl: string;
                            value: _18.MsgDeleteAccountCertificate;
                        };
                        deleteDomain(value: _18.MsgDeleteDomain): {
                            typeUrl: string;
                            value: _18.MsgDeleteDomain;
                        };
                        registerAccount(value: _18.MsgRegisterAccount): {
                            typeUrl: string;
                            value: _18.MsgRegisterAccount;
                        };
                        registerDomain(value: _18.MsgRegisterDomain): {
                            typeUrl: string;
                            value: _18.MsgRegisterDomain;
                        };
                        renewAccount(value: _18.MsgRenewAccount): {
                            typeUrl: string;
                            value: _18.MsgRenewAccount;
                        };
                        renewDomain(value: _18.MsgRenewDomain): {
                            typeUrl: string;
                            value: _18.MsgRenewDomain;
                        };
                        replaceAccountMetadata(value: _18.MsgReplaceAccountMetadata): {
                            typeUrl: string;
                            value: _18.MsgReplaceAccountMetadata;
                        };
                        replaceAccountResources(value: _18.MsgReplaceAccountResources): {
                            typeUrl: string;
                            value: _18.MsgReplaceAccountResources;
                        };
                        transferAccount(value: _18.MsgTransferAccount): {
                            typeUrl: string;
                            value: _18.MsgTransferAccount;
                        };
                        transferDomain(value: _18.MsgTransferDomain): {
                            typeUrl: string;
                            value: _18.MsgTransferDomain;
                        };
                    };
                    fromJSON: {
                        addAccountCertificate(value: any): {
                            typeUrl: string;
                            value: _18.MsgAddAccountCertificate;
                        };
                        deleteAccount(value: any): {
                            typeUrl: string;
                            value: _18.MsgDeleteAccount;
                        };
                        deleteAccountCertificate(value: any): {
                            typeUrl: string;
                            value: _18.MsgDeleteAccountCertificate;
                        };
                        deleteDomain(value: any): {
                            typeUrl: string;
                            value: _18.MsgDeleteDomain;
                        };
                        registerAccount(value: any): {
                            typeUrl: string;
                            value: _18.MsgRegisterAccount;
                        };
                        registerDomain(value: any): {
                            typeUrl: string;
                            value: _18.MsgRegisterDomain;
                        };
                        renewAccount(value: any): {
                            typeUrl: string;
                            value: _18.MsgRenewAccount;
                        };
                        renewDomain(value: any): {
                            typeUrl: string;
                            value: _18.MsgRenewDomain;
                        };
                        replaceAccountMetadata(value: any): {
                            typeUrl: string;
                            value: _18.MsgReplaceAccountMetadata;
                        };
                        replaceAccountResources(value: any): {
                            typeUrl: string;
                            value: _18.MsgReplaceAccountResources;
                        };
                        transferAccount(value: any): {
                            typeUrl: string;
                            value: _18.MsgTransferAccount;
                        };
                        transferDomain(value: any): {
                            typeUrl: string;
                            value: _18.MsgTransferDomain;
                        };
                    };
                    fromPartial: {
                        addAccountCertificate(value: _18.MsgAddAccountCertificate): {
                            typeUrl: string;
                            value: _18.MsgAddAccountCertificate;
                        };
                        deleteAccount(value: _18.MsgDeleteAccount): {
                            typeUrl: string;
                            value: _18.MsgDeleteAccount;
                        };
                        deleteAccountCertificate(value: _18.MsgDeleteAccountCertificate): {
                            typeUrl: string;
                            value: _18.MsgDeleteAccountCertificate;
                        };
                        deleteDomain(value: _18.MsgDeleteDomain): {
                            typeUrl: string;
                            value: _18.MsgDeleteDomain;
                        };
                        registerAccount(value: _18.MsgRegisterAccount): {
                            typeUrl: string;
                            value: _18.MsgRegisterAccount;
                        };
                        registerDomain(value: _18.MsgRegisterDomain): {
                            typeUrl: string;
                            value: _18.MsgRegisterDomain;
                        };
                        renewAccount(value: _18.MsgRenewAccount): {
                            typeUrl: string;
                            value: _18.MsgRenewAccount;
                        };
                        renewDomain(value: _18.MsgRenewDomain): {
                            typeUrl: string;
                            value: _18.MsgRenewDomain;
                        };
                        replaceAccountMetadata(value: _18.MsgReplaceAccountMetadata): {
                            typeUrl: string;
                            value: _18.MsgReplaceAccountMetadata;
                        };
                        replaceAccountResources(value: _18.MsgReplaceAccountResources): {
                            typeUrl: string;
                            value: _18.MsgReplaceAccountResources;
                        };
                        transferAccount(value: _18.MsgTransferAccount): {
                            typeUrl: string;
                            value: _18.MsgTransferAccount;
                        };
                        transferDomain(value: _18.MsgTransferDomain): {
                            typeUrl: string;
                            value: _18.MsgTransferDomain;
                        };
                    };
                };
                AminoConverter: {
                    "/starnamed.x.starname.v1beta1.MsgAddAccountCertificate": {
                        aminoType: string;
                        toAmino: ({ domain, name, owner, payer, newCertificate }: _18.MsgAddAccountCertificate) => {
                            domain: string;
                            name: string;
                            owner: string;
                            payer: string;
                            new_certificate: Uint8Array;
                        };
                        fromAmino: ({ domain, name, owner, payer, new_certificate }: {
                            domain: string;
                            name: string;
                            owner: string;
                            payer: string;
                            new_certificate: Uint8Array;
                        }) => _18.MsgAddAccountCertificate;
                    };
                    "/starnamed.x.starname.v1beta1.MsgDeleteAccount": {
                        aminoType: string;
                        toAmino: ({ domain, name, owner, payer }: _18.MsgDeleteAccount) => {
                            domain: string;
                            name: string;
                            owner: string;
                            payer: string;
                        };
                        fromAmino: ({ domain, name, owner, payer }: {
                            domain: string;
                            name: string;
                            owner: string;
                            payer: string;
                        }) => _18.MsgDeleteAccount;
                    };
                    "/starnamed.x.starname.v1beta1.MsgDeleteAccountCertificate": {
                        aminoType: string;
                        toAmino: ({ domain, name, owner, payer, deleteCertificate }: _18.MsgDeleteAccountCertificate) => {
                            domain: string;
                            name: string;
                            owner: string;
                            payer: string;
                            delete_certificate: Uint8Array;
                        };
                        fromAmino: ({ domain, name, owner, payer, delete_certificate }: {
                            domain: string;
                            name: string;
                            owner: string;
                            payer: string;
                            delete_certificate: Uint8Array;
                        }) => _18.MsgDeleteAccountCertificate;
                    };
                    "/starnamed.x.starname.v1beta1.MsgDeleteDomain": {
                        aminoType: string;
                        toAmino: ({ domain, owner, payer }: _18.MsgDeleteDomain) => {
                            domain: string;
                            owner: string;
                            payer: string;
                        };
                        fromAmino: ({ domain, owner, payer }: {
                            domain: string;
                            owner: string;
                            payer: string;
                        }) => _18.MsgDeleteDomain;
                    };
                    "/starnamed.x.starname.v1beta1.MsgRegisterAccount": {
                        aminoType: string;
                        toAmino: ({ domain, name, owner, payer, broker, registerer, resources }: _18.MsgRegisterAccount) => {
                            domain: string;
                            name: string;
                            owner: string;
                            payer: string;
                            broker: string;
                            registerer: string;
                            resources: {
                                uri: string;
                                resource: string;
                            }[];
                        };
                        fromAmino: ({ domain, name, owner, payer, broker, registerer, resources }: {
                            domain: string;
                            name: string;
                            owner: string;
                            payer: string;
                            broker: string;
                            registerer: string;
                            resources: {
                                uri: string;
                                resource: string;
                            }[];
                        }) => _18.MsgRegisterAccount;
                    };
                    "/starnamed.x.starname.v1beta1.MsgRegisterDomain": {
                        aminoType: string;
                        toAmino: ({ name, admin, payer, broker, domainType }: _18.MsgRegisterDomain) => {
                            name: string;
                            admin: string;
                            payer: string;
                            broker: string;
                            domain_type: string;
                        };
                        fromAmino: ({ name, admin, payer, broker, domain_type }: {
                            name: string;
                            admin: string;
                            payer: string;
                            broker: string;
                            domain_type: string;
                        }) => _18.MsgRegisterDomain;
                    };
                    "/starnamed.x.starname.v1beta1.MsgRenewAccount": {
                        aminoType: string;
                        toAmino: ({ domain, name, signer, payer }: _18.MsgRenewAccount) => {
                            domain: string;
                            name: string;
                            signer: string;
                            payer: string;
                        };
                        fromAmino: ({ domain, name, signer, payer }: {
                            domain: string;
                            name: string;
                            signer: string;
                            payer: string;
                        }) => _18.MsgRenewAccount;
                    };
                    "/starnamed.x.starname.v1beta1.MsgRenewDomain": {
                        aminoType: string;
                        toAmino: ({ domain, signer, payer }: _18.MsgRenewDomain) => {
                            domain: string;
                            signer: string;
                            payer: string;
                        };
                        fromAmino: ({ domain, signer, payer }: {
                            domain: string;
                            signer: string;
                            payer: string;
                        }) => _18.MsgRenewDomain;
                    };
                    "/starnamed.x.starname.v1beta1.MsgReplaceAccountMetadata": {
                        aminoType: string;
                        toAmino: ({ domain, name, owner, payer, newMetadataUri }: _18.MsgReplaceAccountMetadata) => {
                            domain: string;
                            name: string;
                            owner: string;
                            payer: string;
                            new_metadata_uri: string;
                        };
                        fromAmino: ({ domain, name, owner, payer, new_metadata_uri }: {
                            domain: string;
                            name: string;
                            owner: string;
                            payer: string;
                            new_metadata_uri: string;
                        }) => _18.MsgReplaceAccountMetadata;
                    };
                    "/starnamed.x.starname.v1beta1.MsgReplaceAccountResources": {
                        aminoType: string;
                        toAmino: ({ domain, name, owner, payer, newResources }: _18.MsgReplaceAccountResources) => {
                            domain: string;
                            name: string;
                            owner: string;
                            payer: string;
                            new_resources: {
                                uri: string;
                                resource: string;
                            }[];
                        };
                        fromAmino: ({ domain, name, owner, payer, new_resources }: {
                            domain: string;
                            name: string;
                            owner: string;
                            payer: string;
                            new_resources: {
                                uri: string;
                                resource: string;
                            }[];
                        }) => _18.MsgReplaceAccountResources;
                    };
                    "/starnamed.x.starname.v1beta1.MsgTransferAccount": {
                        aminoType: string;
                        toAmino: ({ domain, name, owner, payer, newOwner, reset }: _18.MsgTransferAccount) => {
                            domain: string;
                            name: string;
                            owner: string;
                            payer: string;
                            new_owner: string;
                            reset: boolean;
                        };
                        fromAmino: ({ domain, name, owner, payer, new_owner, reset }: {
                            domain: string;
                            name: string;
                            owner: string;
                            payer: string;
                            new_owner: string;
                            reset: boolean;
                        }) => _18.MsgTransferAccount;
                    };
                    "/starnamed.x.starname.v1beta1.MsgTransferDomain": {
                        aminoType: string;
                        toAmino: ({ domain, owner, payer, newAdmin, transferFlag }: _18.MsgTransferDomain) => {
                            domain: string;
                            owner: string;
                            payer: string;
                            new_admin: string;
                            transfer_flag: string;
                        };
                        fromAmino: ({ domain, owner, payer, new_admin, transfer_flag }: {
                            domain: string;
                            owner: string;
                            payer: string;
                            new_admin: string;
                            transfer_flag: string;
                        }) => _18.MsgTransferDomain;
                    };
                };
                Resource: {
                    encode(message: _19.Resource, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _19.Resource;
                    fromPartial(object: Partial<_19.Resource>): _19.Resource;
                };
                Domain: {
                    encode(message: _19.Domain, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _19.Domain;
                    fromPartial(object: Partial<_19.Domain>): _19.Domain;
                };
                Account: {
                    encode(message: _19.Account, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _19.Account;
                    fromPartial(object: Partial<_19.Account>): _19.Account;
                };
                MsgAddAccountCertificate: {
                    encode(message: _18.MsgAddAccountCertificate, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _18.MsgAddAccountCertificate;
                    fromPartial(object: Partial<_18.MsgAddAccountCertificate>): _18.MsgAddAccountCertificate;
                };
                MsgAddAccountCertificateResponse: {
                    encode(_: _18.MsgAddAccountCertificateResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(_: any): _18.MsgAddAccountCertificateResponse;
                    fromPartial(_: Partial<_18.MsgAddAccountCertificateResponse>): _18.MsgAddAccountCertificateResponse;
                };
                MsgDeleteAccountCertificate: {
                    encode(message: _18.MsgDeleteAccountCertificate, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _18.MsgDeleteAccountCertificate;
                    fromPartial(object: Partial<_18.MsgDeleteAccountCertificate>): _18.MsgDeleteAccountCertificate;
                };
                MsgDeleteAccountCertificateResponse: {
                    encode(_: _18.MsgDeleteAccountCertificateResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(_: any): _18.MsgDeleteAccountCertificateResponse;
                    fromPartial(_: Partial<_18.MsgDeleteAccountCertificateResponse>): _18.MsgDeleteAccountCertificateResponse;
                };
                MsgDeleteAccount: {
                    encode(message: _18.MsgDeleteAccount, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _18.MsgDeleteAccount;
                    fromPartial(object: Partial<_18.MsgDeleteAccount>): _18.MsgDeleteAccount;
                };
                MsgDeleteAccountResponse: {
                    encode(_: _18.MsgDeleteAccountResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(_: any): _18.MsgDeleteAccountResponse;
                    fromPartial(_: Partial<_18.MsgDeleteAccountResponse>): _18.MsgDeleteAccountResponse;
                };
                MsgDeleteDomain: {
                    encode(message: _18.MsgDeleteDomain, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _18.MsgDeleteDomain;
                    fromPartial(object: Partial<_18.MsgDeleteDomain>): _18.MsgDeleteDomain;
                };
                MsgDeleteDomainResponse: {
                    encode(_: _18.MsgDeleteDomainResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(_: any): _18.MsgDeleteDomainResponse;
                    fromPartial(_: Partial<_18.MsgDeleteDomainResponse>): _18.MsgDeleteDomainResponse;
                };
                MsgRegisterAccount: {
                    encode(message: _18.MsgRegisterAccount, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _18.MsgRegisterAccount;
                    fromPartial(object: Partial<_18.MsgRegisterAccount>): _18.MsgRegisterAccount;
                };
                MsgRegisterAccountResponse: {
                    encode(_: _18.MsgRegisterAccountResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(_: any): _18.MsgRegisterAccountResponse;
                    fromPartial(_: Partial<_18.MsgRegisterAccountResponse>): _18.MsgRegisterAccountResponse;
                };
                MsgRegisterDomain: {
                    encode(message: _18.MsgRegisterDomain, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _18.MsgRegisterDomain;
                    fromPartial(object: Partial<_18.MsgRegisterDomain>): _18.MsgRegisterDomain;
                };
                MsgRegisterDomainResponse: {
                    encode(_: _18.MsgRegisterDomainResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(_: any): _18.MsgRegisterDomainResponse;
                    fromPartial(_: Partial<_18.MsgRegisterDomainResponse>): _18.MsgRegisterDomainResponse;
                };
                MsgRenewAccount: {
                    encode(message: _18.MsgRenewAccount, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _18.MsgRenewAccount;
                    fromPartial(object: Partial<_18.MsgRenewAccount>): _18.MsgRenewAccount;
                };
                MsgRenewAccountResponse: {
                    encode(_: _18.MsgRenewAccountResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(_: any): _18.MsgRenewAccountResponse;
                    fromPartial(_: Partial<_18.MsgRenewAccountResponse>): _18.MsgRenewAccountResponse;
                };
                MsgRenewDomain: {
                    encode(message: _18.MsgRenewDomain, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _18.MsgRenewDomain;
                    fromPartial(object: Partial<_18.MsgRenewDomain>): _18.MsgRenewDomain;
                };
                MsgRenewDomainResponse: {
                    encode(_: _18.MsgRenewDomainResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(_: any): _18.MsgRenewDomainResponse;
                    fromPartial(_: Partial<_18.MsgRenewDomainResponse>): _18.MsgRenewDomainResponse;
                };
                MsgReplaceAccountResources: {
                    encode(message: _18.MsgReplaceAccountResources, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _18.MsgReplaceAccountResources;
                    fromPartial(object: Partial<_18.MsgReplaceAccountResources>): _18.MsgReplaceAccountResources;
                };
                MsgReplaceAccountResourcesResponse: {
                    encode(_: _18.MsgReplaceAccountResourcesResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(_: any): _18.MsgReplaceAccountResourcesResponse;
                    fromPartial(_: Partial<_18.MsgReplaceAccountResourcesResponse>): _18.MsgReplaceAccountResourcesResponse;
                };
                MsgReplaceAccountMetadata: {
                    encode(message: _18.MsgReplaceAccountMetadata, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _18.MsgReplaceAccountMetadata;
                    fromPartial(object: Partial<_18.MsgReplaceAccountMetadata>): _18.MsgReplaceAccountMetadata;
                };
                MsgReplaceAccountMetadataResponse: {
                    encode(_: _18.MsgReplaceAccountMetadataResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(_: any): _18.MsgReplaceAccountMetadataResponse;
                    fromPartial(_: Partial<_18.MsgReplaceAccountMetadataResponse>): _18.MsgReplaceAccountMetadataResponse;
                };
                MsgTransferAccount: {
                    encode(message: _18.MsgTransferAccount, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _18.MsgTransferAccount;
                    fromPartial(object: Partial<_18.MsgTransferAccount>): _18.MsgTransferAccount;
                };
                MsgTransferAccountResponse: {
                    encode(_: _18.MsgTransferAccountResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(_: any): _18.MsgTransferAccountResponse;
                    fromPartial(_: Partial<_18.MsgTransferAccountResponse>): _18.MsgTransferAccountResponse;
                };
                MsgTransferDomain: {
                    encode(message: _18.MsgTransferDomain, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _18.MsgTransferDomain;
                    fromPartial(object: Partial<_18.MsgTransferDomain>): _18.MsgTransferDomain;
                };
                MsgTransferDomainResponse: {
                    encode(_: _18.MsgTransferDomainResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(_: any): _18.MsgTransferDomainResponse;
                    fromPartial(_: Partial<_18.MsgTransferDomainResponse>): _18.MsgTransferDomainResponse;
                };
                QueryDomainRequest: {
                    encode(message: _17.QueryDomainRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _17.QueryDomainRequest;
                    fromPartial(object: Partial<_17.QueryDomainRequest>): _17.QueryDomainRequest;
                };
                QueryDomainResponse: {
                    encode(message: _17.QueryDomainResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _17.QueryDomainResponse;
                    fromPartial(object: Partial<_17.QueryDomainResponse>): _17.QueryDomainResponse;
                };
                QueryDomainAccountsRequest: {
                    encode(message: _17.QueryDomainAccountsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _17.QueryDomainAccountsRequest;
                    fromPartial(object: Partial<_17.QueryDomainAccountsRequest>): _17.QueryDomainAccountsRequest;
                };
                QueryDomainAccountsResponse: {
                    encode(message: _17.QueryDomainAccountsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _17.QueryDomainAccountsResponse;
                    fromPartial(object: Partial<_17.QueryDomainAccountsResponse>): _17.QueryDomainAccountsResponse;
                };
                QueryStarnameRequest: {
                    encode(message: _17.QueryStarnameRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _17.QueryStarnameRequest;
                    fromPartial(object: Partial<_17.QueryStarnameRequest>): _17.QueryStarnameRequest;
                };
                QueryStarnameResponse: {
                    encode(message: _17.QueryStarnameResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _17.QueryStarnameResponse;
                    fromPartial(object: Partial<_17.QueryStarnameResponse>): _17.QueryStarnameResponse;
                };
                QueryOwnerAccountsRequest: {
                    encode(message: _17.QueryOwnerAccountsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _17.QueryOwnerAccountsRequest;
                    fromPartial(object: Partial<_17.QueryOwnerAccountsRequest>): _17.QueryOwnerAccountsRequest;
                };
                QueryOwnerAccountsResponse: {
                    encode(message: _17.QueryOwnerAccountsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _17.QueryOwnerAccountsResponse;
                    fromPartial(object: Partial<_17.QueryOwnerAccountsResponse>): _17.QueryOwnerAccountsResponse;
                };
                QueryOwnerDomainsRequest: {
                    encode(message: _17.QueryOwnerDomainsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _17.QueryOwnerDomainsRequest;
                    fromPartial(object: Partial<_17.QueryOwnerDomainsRequest>): _17.QueryOwnerDomainsRequest;
                };
                QueryOwnerDomainsResponse: {
                    encode(message: _17.QueryOwnerDomainsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _17.QueryOwnerDomainsResponse;
                    fromPartial(object: Partial<_17.QueryOwnerDomainsResponse>): _17.QueryOwnerDomainsResponse;
                };
                QueryResourceAccountsRequest: {
                    encode(message: _17.QueryResourceAccountsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _17.QueryResourceAccountsRequest;
                    fromPartial(object: Partial<_17.QueryResourceAccountsRequest>): _17.QueryResourceAccountsRequest;
                };
                QueryResourceAccountsResponse: {
                    encode(message: _17.QueryResourceAccountsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _17.QueryResourceAccountsResponse;
                    fromPartial(object: Partial<_17.QueryResourceAccountsResponse>): _17.QueryResourceAccountsResponse;
                };
                QueryBrokerAccountsRequest: {
                    encode(message: _17.QueryBrokerAccountsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _17.QueryBrokerAccountsRequest;
                    fromPartial(object: Partial<_17.QueryBrokerAccountsRequest>): _17.QueryBrokerAccountsRequest;
                };
                QueryBrokerAccountsResponse: {
                    encode(message: _17.QueryBrokerAccountsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _17.QueryBrokerAccountsResponse;
                    fromPartial(object: Partial<_17.QueryBrokerAccountsResponse>): _17.QueryBrokerAccountsResponse;
                };
                QueryBrokerDomainsRequest: {
                    encode(message: _17.QueryBrokerDomainsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _17.QueryBrokerDomainsRequest;
                    fromPartial(object: Partial<_17.QueryBrokerDomainsRequest>): _17.QueryBrokerDomainsRequest;
                };
                QueryBrokerDomainsResponse: {
                    encode(message: _17.QueryBrokerDomainsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _17.QueryBrokerDomainsResponse;
                    fromPartial(object: Partial<_17.QueryBrokerDomainsResponse>): _17.QueryBrokerDomainsResponse;
                };
                QueryYieldRequest: {
                    encode(_: _17.QueryYieldRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(_: any): _17.QueryYieldRequest;
                    fromPartial(_: Partial<_17.QueryYieldRequest>): _17.QueryYieldRequest;
                };
                QueryYieldResponse: {
                    encode(message: _17.QueryYieldResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _17.QueryYieldResponse;
                    fromPartial(object: Partial<_17.QueryYieldResponse>): _17.QueryYieldResponse;
                };
                GenesisState: {
                    encode(message: _16.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _16.GenesisState;
                    fromPartial(object: Partial<_16.GenesisState>): _16.GenesisState;
                };
            };
        }
    }
    const ClientFactory: {
        createRPCMsgClient: ({ rpc }: {
            rpc: import("../helpers").Rpc;
        }) => Promise<{
            starnamed: {
                x: {
                    escrow: {
                        v1beta1: _145.MsgClientImpl;
                    };
                    starname: {
                        v1beta1: _146.MsgClientImpl;
                    };
                };
            };
            cosmos: {
                authz: {
                    v1beta1: import("../cosmos/authz/v1beta1/tx.rpc.msg").MsgClientImpl;
                };
                bank: {
                    v1beta1: import("../cosmos/bank/v1beta1/tx.rpc.msg").MsgClientImpl;
                };
                crisis: {
                    v1beta1: import("../cosmos/crisis/v1beta1/tx.rpc.msg").MsgClientImpl;
                };
                distribution: {
                    v1beta1: import("../cosmos/distribution/v1beta1/tx.rpc.msg").MsgClientImpl;
                };
                evidence: {
                    v1beta1: import("../cosmos/evidence/v1beta1/tx.rpc.msg").MsgClientImpl;
                };
                feegrant: {
                    v1beta1: import("../cosmos/feegrant/v1beta1/tx.rpc.msg").MsgClientImpl;
                };
                gov: {
                    v1beta1: import("../cosmos/gov/v1beta1/tx.rpc.msg").MsgClientImpl;
                };
                slashing: {
                    v1beta1: import("../cosmos/slashing/v1beta1/tx.rpc.msg").MsgClientImpl;
                };
                staking: {
                    v1beta1: import("../cosmos/staking/v1beta1/tx.rpc.msg").MsgClientImpl;
                };
                vesting: {
                    v1beta1: import("../cosmos/vesting/v1beta1/tx.rpc.msg").MsgClientImpl;
                };
            };
        }>;
        createRPCQueryClient: ({ rpcEndpoint }: {
            rpcEndpoint: string | import("@cosmjs/tendermint-rpc").HttpEndpoint;
        }) => Promise<{
            starnamed: {
                x: {
                    configuration: {
                        v1beta1: {
                            config(request?: _7.QueryConfigRequest): Promise<_7.QueryConfigResponse>;
                            fees(request?: _7.QueryFeesRequest): Promise<_7.QueryFeesResponse>;
                        };
                    };
                    escrow: {
                        v1beta1: {
                            escrow(request: _12.QueryEscrowRequest): Promise<_12.QueryEscrowResponse>;
                            escrows(request: _12.QueryEscrowsRequest): Promise<_12.QueryEscrowsResponse>;
                        };
                    };
                    starname: {
                        v1beta1: {
                            domain(request: _17.QueryDomainRequest): Promise<_17.QueryDomainResponse>;
                            domainAccounts(request: _17.QueryDomainAccountsRequest): Promise<_17.QueryDomainAccountsResponse>;
                            starname(request: _17.QueryStarnameRequest): Promise<_17.QueryStarnameResponse>;
                            ownerAccounts(request: _17.QueryOwnerAccountsRequest): Promise<_17.QueryOwnerAccountsResponse>;
                            ownerDomains(request: _17.QueryOwnerDomainsRequest): Promise<_17.QueryOwnerDomainsResponse>;
                            resourceAccounts(request: _17.QueryResourceAccountsRequest): Promise<_17.QueryResourceAccountsResponse>;
                            brokerAccounts(request: _17.QueryBrokerAccountsRequest): Promise<_17.QueryBrokerAccountsResponse>;
                            brokerDomains(request: _17.QueryBrokerDomainsRequest): Promise<_17.QueryBrokerDomainsResponse>;
                            yield(request?: _17.QueryYieldRequest): Promise<_17.QueryYieldResponse>;
                        };
                    };
                };
            };
            cosmos: {
                auth: {
                    v1beta1: {
                        accounts(request?: import("../cosmos/auth/v1beta1/query").QueryAccountsRequest): Promise<import("../cosmos/auth/v1beta1/query").QueryAccountsResponse>;
                        account(request: import("../cosmos/auth/v1beta1/query").QueryAccountRequest): Promise<import("../cosmos/auth/v1beta1/query").QueryAccountResponse>;
                        params(request?: import("../cosmos/auth/v1beta1/query").QueryParamsRequest): Promise<import("../cosmos/auth/v1beta1/query").QueryParamsResponse>;
                    };
                };
                authz: {
                    v1beta1: {
                        grants(request: import("../cosmos/authz/v1beta1/query").QueryGrantsRequest): Promise<import("../cosmos/authz/v1beta1/query").QueryGrantsResponse>;
                        granterGrants(request: import("../cosmos/authz/v1beta1/query").QueryGranterGrantsRequest): Promise<import("../cosmos/authz/v1beta1/query").QueryGranterGrantsResponse>;
                        granteeGrants(request: import("../cosmos/authz/v1beta1/query").QueryGranteeGrantsRequest): Promise<import("../cosmos/authz/v1beta1/query").QueryGranteeGrantsResponse>;
                    };
                };
                bank: {
                    v1beta1: {
                        balance(request: import("../cosmos/bank/v1beta1/query").QueryBalanceRequest): Promise<import("../cosmos/bank/v1beta1/query").QueryBalanceResponse>;
                        allBalances(request: import("../cosmos/bank/v1beta1/query").QueryAllBalancesRequest): Promise<import("../cosmos/bank/v1beta1/query").QueryAllBalancesResponse>;
                        spendableBalances(request: import("../cosmos/bank/v1beta1/query").QuerySpendableBalancesRequest): Promise<import("../cosmos/bank/v1beta1/query").QuerySpendableBalancesResponse>;
                        totalSupply(request?: import("../cosmos/bank/v1beta1/query").QueryTotalSupplyRequest): Promise<import("../cosmos/bank/v1beta1/query").QueryTotalSupplyResponse>;
                        supplyOf(request: import("../cosmos/bank/v1beta1/query").QuerySupplyOfRequest): Promise<import("../cosmos/bank/v1beta1/query").QuerySupplyOfResponse>;
                        params(request?: import("../cosmos/bank/v1beta1/query").QueryParamsRequest): Promise<import("../cosmos/bank/v1beta1/query").QueryParamsResponse>;
                        denomMetadata(request: import("../cosmos/bank/v1beta1/query").QueryDenomMetadataRequest): Promise<import("../cosmos/bank/v1beta1/query").QueryDenomMetadataResponse>;
                        denomsMetadata(request?: import("../cosmos/bank/v1beta1/query").QueryDenomsMetadataRequest): Promise<import("../cosmos/bank/v1beta1/query").QueryDenomsMetadataResponse>;
                    };
                };
                base: {
                    tendermint: {
                        v1beta1: {
                            getNodeInfo(request?: import("../cosmos/base/tendermint/v1beta1/query").GetNodeInfoRequest): Promise<import("../cosmos/base/tendermint/v1beta1/query").GetNodeInfoResponse>;
                            getSyncing(request?: import("../cosmos/base/tendermint/v1beta1/query").GetSyncingRequest): Promise<import("../cosmos/base/tendermint/v1beta1/query").GetSyncingResponse>;
                            getLatestBlock(request?: import("../cosmos/base/tendermint/v1beta1/query").GetLatestBlockRequest): Promise<import("../cosmos/base/tendermint/v1beta1/query").GetLatestBlockResponse>;
                            getBlockByHeight(request: import("../cosmos/base/tendermint/v1beta1/query").GetBlockByHeightRequest): Promise<import("../cosmos/base/tendermint/v1beta1/query").GetBlockByHeightResponse>;
                            getLatestValidatorSet(request?: import("../cosmos/base/tendermint/v1beta1/query").GetLatestValidatorSetRequest): Promise<import("../cosmos/base/tendermint/v1beta1/query").GetLatestValidatorSetResponse>;
                            getValidatorSetByHeight(request: import("../cosmos/base/tendermint/v1beta1/query").GetValidatorSetByHeightRequest): Promise<import("../cosmos/base/tendermint/v1beta1/query").GetValidatorSetByHeightResponse>;
                        };
                    };
                };
                distribution: {
                    v1beta1: {
                        params(request?: import("../cosmos/distribution/v1beta1/query").QueryParamsRequest): Promise<import("../cosmos/distribution/v1beta1/query").QueryParamsResponse>;
                        validatorOutstandingRewards(request: import("../cosmos/distribution/v1beta1/query").QueryValidatorOutstandingRewardsRequest): Promise<import("../cosmos/distribution/v1beta1/query").QueryValidatorOutstandingRewardsResponse>;
                        validatorCommission(request: import("../cosmos/distribution/v1beta1/query").QueryValidatorCommissionRequest): Promise<import("../cosmos/distribution/v1beta1/query").QueryValidatorCommissionResponse>;
                        validatorSlashes(request: import("../cosmos/distribution/v1beta1/query").QueryValidatorSlashesRequest): Promise<import("../cosmos/distribution/v1beta1/query").QueryValidatorSlashesResponse>;
                        delegationRewards(request: import("../cosmos/distribution/v1beta1/query").QueryDelegationRewardsRequest): Promise<import("../cosmos/distribution/v1beta1/query").QueryDelegationRewardsResponse>;
                        delegationTotalRewards(request: import("../cosmos/distribution/v1beta1/query").QueryDelegationTotalRewardsRequest): Promise<import("../cosmos/distribution/v1beta1/query").QueryDelegationTotalRewardsResponse>;
                        delegatorValidators(request: import("../cosmos/distribution/v1beta1/query").QueryDelegatorValidatorsRequest): Promise<import("../cosmos/distribution/v1beta1/query").QueryDelegatorValidatorsResponse>;
                        delegatorWithdrawAddress(request: import("../cosmos/distribution/v1beta1/query").QueryDelegatorWithdrawAddressRequest): Promise<import("../cosmos/distribution/v1beta1/query").QueryDelegatorWithdrawAddressResponse>;
                        communityPool(request?: import("../cosmos/distribution/v1beta1/query").QueryCommunityPoolRequest): Promise<import("../cosmos/distribution/v1beta1/query").QueryCommunityPoolResponse>;
                    };
                };
                evidence: {
                    v1beta1: {
                        evidence(request: import("../cosmos/evidence/v1beta1/query").QueryEvidenceRequest): Promise<import("../cosmos/evidence/v1beta1/query").QueryEvidenceResponse>;
                        allEvidence(request?: import("../cosmos/evidence/v1beta1/query").QueryAllEvidenceRequest): Promise<import("../cosmos/evidence/v1beta1/query").QueryAllEvidenceResponse>;
                    };
                };
                feegrant: {
                    v1beta1: {
                        allowance(request: import("../cosmos/feegrant/v1beta1/query").QueryAllowanceRequest): Promise<import("../cosmos/feegrant/v1beta1/query").QueryAllowanceResponse>;
                        allowances(request: import("../cosmos/feegrant/v1beta1/query").QueryAllowancesRequest): Promise<import("../cosmos/feegrant/v1beta1/query").QueryAllowancesResponse>;
                        allowancesByGranter(request: import("../cosmos/feegrant/v1beta1/query").QueryAllowancesByGranterRequest): Promise<import("../cosmos/feegrant/v1beta1/query").QueryAllowancesByGranterResponse>;
                    };
                };
                gov: {
                    v1beta1: {
                        proposal(request: import("../cosmos/gov/v1beta1/query").QueryProposalRequest): Promise<import("../cosmos/gov/v1beta1/query").QueryProposalResponse>;
                        proposals(request: import("../cosmos/gov/v1beta1/query").QueryProposalsRequest): Promise<import("../cosmos/gov/v1beta1/query").QueryProposalsResponse>;
                        vote(request: import("../cosmos/gov/v1beta1/query").QueryVoteRequest): Promise<import("../cosmos/gov/v1beta1/query").QueryVoteResponse>;
                        votes(request: import("../cosmos/gov/v1beta1/query").QueryVotesRequest): Promise<import("../cosmos/gov/v1beta1/query").QueryVotesResponse>;
                        params(request: import("../cosmos/gov/v1beta1/query").QueryParamsRequest): Promise<import("../cosmos/gov/v1beta1/query").QueryParamsResponse>;
                        deposit(request: import("../cosmos/gov/v1beta1/query").QueryDepositRequest): Promise<import("../cosmos/gov/v1beta1/query").QueryDepositResponse>;
                        deposits(request: import("../cosmos/gov/v1beta1/query").QueryDepositsRequest): Promise<import("../cosmos/gov/v1beta1/query").QueryDepositsResponse>;
                        tallyResult(request: import("../cosmos/gov/v1beta1/query").QueryTallyResultRequest): Promise<import("../cosmos/gov/v1beta1/query").QueryTallyResultResponse>;
                    };
                };
                mint: {
                    v1beta1: {
                        params(request?: import("../cosmos/mint/v1beta1/query").QueryParamsRequest): Promise<import("../cosmos/mint/v1beta1/query").QueryParamsResponse>;
                        inflation(request?: import("../cosmos/mint/v1beta1/query").QueryInflationRequest): Promise<import("../cosmos/mint/v1beta1/query").QueryInflationResponse>;
                        annualProvisions(request?: import("../cosmos/mint/v1beta1/query").QueryAnnualProvisionsRequest): Promise<import("../cosmos/mint/v1beta1/query").QueryAnnualProvisionsResponse>;
                    };
                };
                params: {
                    v1beta1: {
                        params(request: import("../cosmos/params/v1beta1/query").QueryParamsRequest): Promise<import("../cosmos/params/v1beta1/query").QueryParamsResponse>;
                    };
                };
                slashing: {
                    v1beta1: {
                        params(request?: import("../cosmos/slashing/v1beta1/query").QueryParamsRequest): Promise<import("../cosmos/slashing/v1beta1/query").QueryParamsResponse>;
                        signingInfo(request: import("../cosmos/slashing/v1beta1/query").QuerySigningInfoRequest): Promise<import("../cosmos/slashing/v1beta1/query").QuerySigningInfoResponse>;
                        signingInfos(request?: import("../cosmos/slashing/v1beta1/query").QuerySigningInfosRequest): Promise<import("../cosmos/slashing/v1beta1/query").QuerySigningInfosResponse>;
                    };
                };
                staking: {
                    v1beta1: {
                        validators(request: import("../cosmos/staking/v1beta1/query").QueryValidatorsRequest): Promise<import("../cosmos/staking/v1beta1/query").QueryValidatorsResponse>;
                        validator(request: import("../cosmos/staking/v1beta1/query").QueryValidatorRequest): Promise<import("../cosmos/staking/v1beta1/query").QueryValidatorResponse>;
                        validatorDelegations(request: import("../cosmos/staking/v1beta1/query").QueryValidatorDelegationsRequest): Promise<import("../cosmos/staking/v1beta1/query").QueryValidatorDelegationsResponse>;
                        validatorUnbondingDelegations(request: import("../cosmos/staking/v1beta1/query").QueryValidatorUnbondingDelegationsRequest): Promise<import("../cosmos/staking/v1beta1/query").QueryValidatorUnbondingDelegationsResponse>;
                        delegation(request: import("../cosmos/staking/v1beta1/query").QueryDelegationRequest): Promise<import("../cosmos/staking/v1beta1/query").QueryDelegationResponse>;
                        unbondingDelegation(request: import("../cosmos/staking/v1beta1/query").QueryUnbondingDelegationRequest): Promise<import("../cosmos/staking/v1beta1/query").QueryUnbondingDelegationResponse>;
                        delegatorDelegations(request: import("../cosmos/staking/v1beta1/query").QueryDelegatorDelegationsRequest): Promise<import("../cosmos/staking/v1beta1/query").QueryDelegatorDelegationsResponse>;
                        delegatorUnbondingDelegations(request: import("../cosmos/staking/v1beta1/query").QueryDelegatorUnbondingDelegationsRequest): Promise<import("../cosmos/staking/v1beta1/query").QueryDelegatorUnbondingDelegationsResponse>;
                        redelegations(request: import("../cosmos/staking/v1beta1/query").QueryRedelegationsRequest): Promise<import("../cosmos/staking/v1beta1/query").QueryRedelegationsResponse>;
                        delegatorValidators(request: import("../cosmos/staking/v1beta1/query").QueryDelegatorValidatorsRequest): Promise<import("../cosmos/staking/v1beta1/query").QueryDelegatorValidatorsResponse>;
                        delegatorValidator(request: import("../cosmos/staking/v1beta1/query").QueryDelegatorValidatorRequest): Promise<import("../cosmos/staking/v1beta1/query").QueryDelegatorValidatorResponse>;
                        historicalInfo(request: import("../cosmos/staking/v1beta1/query").QueryHistoricalInfoRequest): Promise<import("../cosmos/staking/v1beta1/query").QueryHistoricalInfoResponse>;
                        pool(request?: import("../cosmos/staking/v1beta1/query").QueryPoolRequest): Promise<import("../cosmos/staking/v1beta1/query").QueryPoolResponse>;
                        params(request?: import("../cosmos/staking/v1beta1/query").QueryParamsRequest): Promise<import("../cosmos/staking/v1beta1/query").QueryParamsResponse>;
                    };
                };
                tx: {
                    v1beta1: {
                        simulate(request: import("../cosmos/tx/v1beta1/service").SimulateRequest): Promise<import("../cosmos/tx/v1beta1/service").SimulateResponse>;
                        getTx(request: import("../cosmos/tx/v1beta1/service").GetTxRequest): Promise<import("../cosmos/tx/v1beta1/service").GetTxResponse>;
                        broadcastTx(request: import("../cosmos/tx/v1beta1/service").BroadcastTxRequest): Promise<import("../cosmos/tx/v1beta1/service").BroadcastTxResponse>;
                        getTxsEvent(request: import("../cosmos/tx/v1beta1/service").GetTxsEventRequest): Promise<import("../cosmos/tx/v1beta1/service").GetTxsEventResponse>;
                        getBlockWithTxs(request: import("../cosmos/tx/v1beta1/service").GetBlockWithTxsRequest): Promise<import("../cosmos/tx/v1beta1/service").GetBlockWithTxsResponse>;
                    };
                };
                upgrade: {
                    v1beta1: {
                        currentPlan(request?: import("../cosmos/upgrade/v1beta1/query").QueryCurrentPlanRequest): Promise<import("../cosmos/upgrade/v1beta1/query").QueryCurrentPlanResponse>;
                        appliedPlan(request: import("../cosmos/upgrade/v1beta1/query").QueryAppliedPlanRequest): Promise<import("../cosmos/upgrade/v1beta1/query").QueryAppliedPlanResponse>;
                        upgradedConsensusState(request: import("../cosmos/upgrade/v1beta1/query").QueryUpgradedConsensusStateRequest): Promise<import("../cosmos/upgrade/v1beta1/query").QueryUpgradedConsensusStateResponse>;
                        moduleVersions(request: import("../cosmos/upgrade/v1beta1/query").QueryModuleVersionsRequest): Promise<import("../cosmos/upgrade/v1beta1/query").QueryModuleVersionsResponse>;
                    };
                };
            };
        }>;
    };
}
