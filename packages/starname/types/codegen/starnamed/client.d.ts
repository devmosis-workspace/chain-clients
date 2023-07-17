import { GeneratedType, Registry, OfflineSigner } from "@cosmjs/proto-signing";
import { AminoTypes, SigningStargateClient } from "@cosmjs/stargate";
import { HttpEndpoint } from "@cosmjs/tendermint-rpc";
export declare const starnamedAminoConverters: {
    "/starnamed.x.starname.v1beta1.MsgAddAccountCertificate": {
        aminoType: string;
        toAmino: ({ domain, name, owner, payer, newCertificate }: import("../iov/starname/v1beta1/tx").MsgAddAccountCertificate) => {
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
        }) => import("../iov/starname/v1beta1/tx").MsgAddAccountCertificate;
    };
    "/starnamed.x.starname.v1beta1.MsgDeleteAccount": {
        aminoType: string;
        toAmino: ({ domain, name, owner, payer }: import("../iov/starname/v1beta1/tx").MsgDeleteAccount) => {
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
        }) => import("../iov/starname/v1beta1/tx").MsgDeleteAccount;
    };
    "/starnamed.x.starname.v1beta1.MsgDeleteAccountCertificate": {
        aminoType: string;
        toAmino: ({ domain, name, owner, payer, deleteCertificate }: import("../iov/starname/v1beta1/tx").MsgDeleteAccountCertificate) => {
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
        }) => import("../iov/starname/v1beta1/tx").MsgDeleteAccountCertificate;
    };
    "/starnamed.x.starname.v1beta1.MsgDeleteDomain": {
        aminoType: string;
        toAmino: ({ domain, owner, payer }: import("../iov/starname/v1beta1/tx").MsgDeleteDomain) => {
            domain: string;
            owner: string;
            payer: string;
        };
        fromAmino: ({ domain, owner, payer }: {
            domain: string;
            owner: string;
            payer: string;
        }) => import("../iov/starname/v1beta1/tx").MsgDeleteDomain;
    };
    "/starnamed.x.starname.v1beta1.MsgRegisterAccount": {
        aminoType: string;
        toAmino: ({ domain, name, owner, payer, broker, registerer, resources }: import("../iov/starname/v1beta1/tx").MsgRegisterAccount) => {
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
        }) => import("../iov/starname/v1beta1/tx").MsgRegisterAccount;
    };
    "/starnamed.x.starname.v1beta1.MsgRegisterDomain": {
        aminoType: string;
        toAmino: ({ name, admin, payer, broker, domainType }: import("../iov/starname/v1beta1/tx").MsgRegisterDomain) => {
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
        }) => import("../iov/starname/v1beta1/tx").MsgRegisterDomain;
    };
    "/starnamed.x.starname.v1beta1.MsgRenewAccount": {
        aminoType: string;
        toAmino: ({ domain, name, signer, payer }: import("../iov/starname/v1beta1/tx").MsgRenewAccount) => {
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
        }) => import("../iov/starname/v1beta1/tx").MsgRenewAccount;
    };
    "/starnamed.x.starname.v1beta1.MsgRenewDomain": {
        aminoType: string;
        toAmino: ({ domain, signer, payer }: import("../iov/starname/v1beta1/tx").MsgRenewDomain) => {
            domain: string;
            signer: string;
            payer: string;
        };
        fromAmino: ({ domain, signer, payer }: {
            domain: string;
            signer: string;
            payer: string;
        }) => import("../iov/starname/v1beta1/tx").MsgRenewDomain;
    };
    "/starnamed.x.starname.v1beta1.MsgReplaceAccountMetadata": {
        aminoType: string;
        toAmino: ({ domain, name, owner, payer, newMetadataUri }: import("../iov/starname/v1beta1/tx").MsgReplaceAccountMetadata) => {
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
        }) => import("../iov/starname/v1beta1/tx").MsgReplaceAccountMetadata;
    };
    "/starnamed.x.starname.v1beta1.MsgReplaceAccountResources": {
        aminoType: string;
        toAmino: ({ domain, name, owner, payer, newResources }: import("../iov/starname/v1beta1/tx").MsgReplaceAccountResources) => {
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
        }) => import("../iov/starname/v1beta1/tx").MsgReplaceAccountResources;
    };
    "/starnamed.x.starname.v1beta1.MsgTransferAccount": {
        aminoType: string;
        toAmino: ({ domain, name, owner, payer, newOwner, reset }: import("../iov/starname/v1beta1/tx").MsgTransferAccount) => {
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
        }) => import("../iov/starname/v1beta1/tx").MsgTransferAccount;
    };
    "/starnamed.x.starname.v1beta1.MsgTransferDomain": {
        aminoType: string;
        toAmino: ({ domain, owner, payer, newAdmin, transferFlag }: import("../iov/starname/v1beta1/tx").MsgTransferDomain) => {
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
        }) => import("../iov/starname/v1beta1/tx").MsgTransferDomain;
    };
    "/starnamed.x.escrow.v1beta1.MsgCreateEscrow": {
        aminoType: string;
        toAmino: ({ seller, feePayer, object, price, deadline }: import("../iov/escrow/v1beta1/tx").MsgCreateEscrow) => {
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
        }) => import("../iov/escrow/v1beta1/tx").MsgCreateEscrow;
    };
    "/starnamed.x.escrow.v1beta1.MsgUpdateEscrow": {
        aminoType: string;
        toAmino: ({ id, updater, feePayer, seller, price, deadline }: import("../iov/escrow/v1beta1/tx").MsgUpdateEscrow) => {
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
        }) => import("../iov/escrow/v1beta1/tx").MsgUpdateEscrow;
    };
    "/starnamed.x.escrow.v1beta1.MsgTransferToEscrow": {
        aminoType: string;
        toAmino: ({ id, sender, feePayer, amount }: import("../iov/escrow/v1beta1/tx").MsgTransferToEscrow) => {
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
        }) => import("../iov/escrow/v1beta1/tx").MsgTransferToEscrow;
    };
    "/starnamed.x.escrow.v1beta1.MsgRefundEscrow": {
        aminoType: string;
        toAmino: ({ id, sender, feePayer }: import("../iov/escrow/v1beta1/tx").MsgRefundEscrow) => {
            id: string;
            sender: string;
            fee_payer: string;
        };
        fromAmino: ({ id, sender, fee_payer }: {
            id: string;
            sender: string;
            fee_payer: string;
        }) => import("../iov/escrow/v1beta1/tx").MsgRefundEscrow;
    };
};
export declare const starnamedProtoRegistry: ReadonlyArray<[string, GeneratedType]>;
export declare const getSigningStarnamedClientOptions: ({ defaultTypes }?: {
    defaultTypes?: ReadonlyArray<[string, GeneratedType]>;
}) => {
    registry: Registry;
    aminoTypes: AminoTypes;
};
export declare const getSigningStarnamedClient: ({ rpcEndpoint, signer, defaultTypes }: {
    rpcEndpoint: string | HttpEndpoint;
    signer: OfflineSigner;
    defaultTypes?: ReadonlyArray<[string, GeneratedType]>;
}) => Promise<SigningStargateClient>;
