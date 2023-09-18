import { Duration, DurationAmino, DurationSDKType } from "../../../google/protobuf/duration";
import { BinaryWriter } from "../../../binary";
/** Config is the configuration of the network */
export interface Config {
    /**
     * Configurer is the configuration owner, the addresses allowed to handle fees
     * and register domains with no superuser
     */
    configurer: string;
    /**
     * ValidDomainName defines a regexp that determines if a domain name is valid
     * or not
     */
    validDomainName: string;
    /**
     * ValidAccountName defines a regexp that determines if an account name is
     * valid or not
     */
    validAccountName: string;
    /** ValidURI defines a regexp that determines if resource uri is valid or not */
    validUri: string;
    /** ValidResource determines a regexp for a resource content */
    validResource: string;
    /**
     * DomainRenewalPeriod defines the duration of the domain renewal period in
     * seconds
     */
    domainRenewalPeriod: Duration;
    /**
     * DomainRenewalCountMax defines maximum number of domain renewals a user can
     * do
     */
    domainRenewalCountMax: number;
    /** DomainGracePeriod defines the grace period for a domain deletion in seconds */
    domainGracePeriod: Duration;
    /**
     * AccountRenewalPeriod defines the duration of the account renewal period in
     * seconds
     */
    accountRenewalPeriod: Duration;
    /**
     * AccountRenewalCountMax defines maximum number of account renewals a user
     * can do
     */
    accountRenewalCountMax: number;
    /** DomainGracePeriod defines the grace period for a domain deletion in seconds */
    accountGracePeriod: Duration;
    /**
     * ResourcesMax defines maximum number of resources could be saved under an
     * account
     */
    resourcesMax: number;
    /**
     * CertificateSizeMax defines maximum size of a certificate that could be
     * saved under an account
     */
    certificateSizeMax: bigint;
    /**
     * CertificateCountMax defines maximum number of certificates that could be
     * saved under an account
     */
    certificateCountMax: number;
    /**
     * MetadataSizeMax defines maximum size of metadata that could be saved under
     * an account
     */
    metadataSizeMax: bigint;
    /**
     * EscrowBroker defines an address that will receive a commission for
     * completed escrows
     */
    escrowBroker: string;
    /**
     * EscrowCommission defines the commission taken by the broker for a completed
     * escrow, between 0 (no commission) and 1 (100% commission)
     */
    escrowCommission: string;
    /** EscrowPeriod defines the maximum duration of an escrow in seconds */
    escrowMaxPeriod: Duration;
}
export interface ConfigProtoMsg {
    typeUrl: "/starnamed.x.configuration.v1beta1.Config";
    value: Uint8Array;
}
/** Config is the configuration of the network */
export interface ConfigAmino {
    /**
     * Configurer is the configuration owner, the addresses allowed to handle fees
     * and register domains with no superuser
     */
    configurer: string;
    /**
     * ValidDomainName defines a regexp that determines if a domain name is valid
     * or not
     */
    valid_domain_name: string;
    /**
     * ValidAccountName defines a regexp that determines if an account name is
     * valid or not
     */
    valid_account_name: string;
    /** ValidURI defines a regexp that determines if resource uri is valid or not */
    valid_uri: string;
    /** ValidResource determines a regexp for a resource content */
    valid_resource: string;
    /**
     * DomainRenewalPeriod defines the duration of the domain renewal period in
     * seconds
     */
    domain_renewal_period?: DurationAmino;
    /**
     * DomainRenewalCountMax defines maximum number of domain renewals a user can
     * do
     */
    domain_renewal_count_max: number;
    /** DomainGracePeriod defines the grace period for a domain deletion in seconds */
    domain_grace_period?: DurationAmino;
    /**
     * AccountRenewalPeriod defines the duration of the account renewal period in
     * seconds
     */
    account_renewal_period?: DurationAmino;
    /**
     * AccountRenewalCountMax defines maximum number of account renewals a user
     * can do
     */
    account_renewal_count_max: number;
    /** DomainGracePeriod defines the grace period for a domain deletion in seconds */
    account_grace_period?: DurationAmino;
    /**
     * ResourcesMax defines maximum number of resources could be saved under an
     * account
     */
    resources_max: number;
    /**
     * CertificateSizeMax defines maximum size of a certificate that could be
     * saved under an account
     */
    certificate_size_max: string;
    /**
     * CertificateCountMax defines maximum number of certificates that could be
     * saved under an account
     */
    certificate_count_max: number;
    /**
     * MetadataSizeMax defines maximum size of metadata that could be saved under
     * an account
     */
    metadata_size_max: string;
    /**
     * EscrowBroker defines an address that will receive a commission for
     * completed escrows
     */
    escrow_broker: string;
    /**
     * EscrowCommission defines the commission taken by the broker for a completed
     * escrow, between 0 (no commission) and 1 (100% commission)
     */
    escrow_commission: string;
    /** EscrowPeriod defines the maximum duration of an escrow in seconds */
    escrow_max_period?: DurationAmino;
}
export interface ConfigAminoMsg {
    type: "/starnamed.x.configuration.v1beta1.Config";
    value: ConfigAmino;
}
/** Config is the configuration of the network */
export interface ConfigSDKType {
    configurer: string;
    valid_domain_name: string;
    valid_account_name: string;
    valid_uri: string;
    valid_resource: string;
    domain_renewal_period: DurationSDKType;
    domain_renewal_count_max: number;
    domain_grace_period: DurationSDKType;
    account_renewal_period: DurationSDKType;
    account_renewal_count_max: number;
    account_grace_period: DurationSDKType;
    resources_max: number;
    certificate_size_max: bigint;
    certificate_count_max: number;
    metadata_size_max: bigint;
    escrow_broker: string;
    escrow_commission: string;
    escrow_max_period: DurationSDKType;
}
/**
 * Fees contains different type of fees to calculate coins to detract when
 * processing different messages
 */
export interface Fees {
    /** FeeCoinDenom defines the denominator of the coin used to process fees */
    feeCoinDenom: string;
    /** FeeCoinPrice defines the price of the coin */
    feeCoinPrice: string;
    /** FeeDefault is the parameter defining the default fee */
    feeDefault: string;
    /**
     * RegisterAccountClosed is the fee to be paid to register an account in a
     * closed domain
     */
    registerAccountClosed: string;
    /**
     * RegisterAccountOpen is the fee to be paid to register an account in an open
     * domain
     */
    registerAccountOpen: string;
    /**
     * TransferAccountClosed is the fee to be paid to register an account in a
     * closed domain
     */
    transferAccountClosed: string;
    /**
     * TransferAccountOpen is the fee to be paid to register an account in an open
     * domain
     */
    transferAccountOpen: string;
    /**
     * ReplaceAccountResources is the fee to be paid to replace account's
     * resources
     */
    replaceAccountResources: string;
    /**
     * AddAccountCertificate is the fee to be paid to add a certificate to an
     * account
     */
    addAccountCertificate: string;
    /**
     * DelAccountCertificate is the feed to be paid to delete a certificate in an
     * account
     */
    delAccountCertificate: string;
    /** SetAccountMetadata is the fee to be paid to set account's metadata */
    setAccountMetadata: string;
    /**
     * RegisterDomain1 is the fee to be paid to register a domain with one
     * character
     */
    registerDomain1: string;
    /**
     * RegisterDomain2 is the fee to be paid to register a domain with two
     * characters
     */
    registerDomain2: string;
    /**
     * RegisterDomain3 is the fee to be paid to register a domain with three
     * characters
     */
    registerDomain3: string;
    /**
     * RegisterDomain4 is the fee to be paid to register a domain with four
     * characters
     */
    registerDomain4: string;
    /**
     * RegisterDomain5 is the fee to be paid to register a domain with five
     * characters
     */
    registerDomain5: string;
    /**
     * RegisterDomainDefault is the fee to be paid to register a domain with more
     * than five characters
     */
    registerDomainDefault: string;
    /**
     * register_open_domain_multiplier is the multiplication applied to fees in
     * register domain operations if they're of open type
     */
    registerOpenDomainMultiplier: string;
    /** transfer_domain_closed is the fee to be paid to transfer a closed domain */
    transferDomainClosed: string;
    /** transfer_domain_open is the fee to be paid to transfer open domains */
    transferDomainOpen: string;
    /** renew_domain_open is the fee to be paid to renew an open domain */
    renewDomainOpen: string;
    /** create_escrow is the fee to be paid to create an escrow */
    createEscrow: string;
    /** update_escrow is the fee to be paid to update an escrow */
    updateEscrow: string;
    /** transfer_to_escrow is the fee to be paid to transfer coins to an escrow */
    transferToEscrow: string;
    /**
     * refund_escrow is the fee to be paid to refund the account or domain placed
     * in an escrow
     */
    refundEscrow: string;
}
export interface FeesProtoMsg {
    typeUrl: "/starnamed.x.configuration.v1beta1.Fees";
    value: Uint8Array;
}
/**
 * Fees contains different type of fees to calculate coins to detract when
 * processing different messages
 */
export interface FeesAmino {
    /** FeeCoinDenom defines the denominator of the coin used to process fees */
    fee_coin_denom: string;
    /** FeeCoinPrice defines the price of the coin */
    fee_coin_price: string;
    /** FeeDefault is the parameter defining the default fee */
    fee_default: string;
    /**
     * RegisterAccountClosed is the fee to be paid to register an account in a
     * closed domain
     */
    register_account_closed: string;
    /**
     * RegisterAccountOpen is the fee to be paid to register an account in an open
     * domain
     */
    register_account_open: string;
    /**
     * TransferAccountClosed is the fee to be paid to register an account in a
     * closed domain
     */
    transfer_account_closed: string;
    /**
     * TransferAccountOpen is the fee to be paid to register an account in an open
     * domain
     */
    transfer_account_open: string;
    /**
     * ReplaceAccountResources is the fee to be paid to replace account's
     * resources
     */
    replace_account_resources: string;
    /**
     * AddAccountCertificate is the fee to be paid to add a certificate to an
     * account
     */
    add_account_certificate: string;
    /**
     * DelAccountCertificate is the feed to be paid to delete a certificate in an
     * account
     */
    del_account_certificate: string;
    /** SetAccountMetadata is the fee to be paid to set account's metadata */
    set_account_metadata: string;
    /**
     * RegisterDomain1 is the fee to be paid to register a domain with one
     * character
     */
    register_domain_1: string;
    /**
     * RegisterDomain2 is the fee to be paid to register a domain with two
     * characters
     */
    register_domain_2: string;
    /**
     * RegisterDomain3 is the fee to be paid to register a domain with three
     * characters
     */
    register_domain_3: string;
    /**
     * RegisterDomain4 is the fee to be paid to register a domain with four
     * characters
     */
    register_domain_4: string;
    /**
     * RegisterDomain5 is the fee to be paid to register a domain with five
     * characters
     */
    register_domain_5: string;
    /**
     * RegisterDomainDefault is the fee to be paid to register a domain with more
     * than five characters
     */
    register_domain_default: string;
    /**
     * register_open_domain_multiplier is the multiplication applied to fees in
     * register domain operations if they're of open type
     */
    register_open_domain_multiplier: string;
    /** transfer_domain_closed is the fee to be paid to transfer a closed domain */
    transfer_domain_closed: string;
    /** transfer_domain_open is the fee to be paid to transfer open domains */
    transfer_domain_open: string;
    /** renew_domain_open is the fee to be paid to renew an open domain */
    renew_domain_open: string;
    /** create_escrow is the fee to be paid to create an escrow */
    create_escrow: string;
    /** update_escrow is the fee to be paid to update an escrow */
    update_escrow: string;
    /** transfer_to_escrow is the fee to be paid to transfer coins to an escrow */
    transfer_to_escrow: string;
    /**
     * refund_escrow is the fee to be paid to refund the account or domain placed
     * in an escrow
     */
    refund_escrow: string;
}
export interface FeesAminoMsg {
    type: "/starnamed.x.configuration.v1beta1.Fees";
    value: FeesAmino;
}
/**
 * Fees contains different type of fees to calculate coins to detract when
 * processing different messages
 */
export interface FeesSDKType {
    fee_coin_denom: string;
    fee_coin_price: string;
    fee_default: string;
    register_account_closed: string;
    register_account_open: string;
    transfer_account_closed: string;
    transfer_account_open: string;
    replace_account_resources: string;
    add_account_certificate: string;
    del_account_certificate: string;
    set_account_metadata: string;
    register_domain_1: string;
    register_domain_2: string;
    register_domain_3: string;
    register_domain_4: string;
    register_domain_5: string;
    register_domain_default: string;
    register_open_domain_multiplier: string;
    transfer_domain_closed: string;
    transfer_domain_open: string;
    renew_domain_open: string;
    create_escrow: string;
    update_escrow: string;
    transfer_to_escrow: string;
    refund_escrow: string;
}
/** GenesisState - genesis state of x/configuration */
export interface GenesisState {
    config: Config;
    fees: Fees;
}
export interface GenesisStateProtoMsg {
    typeUrl: "/starnamed.x.configuration.v1beta1.GenesisState";
    value: Uint8Array;
}
/** GenesisState - genesis state of x/configuration */
export interface GenesisStateAmino {
    config?: ConfigAmino;
    fees?: FeesAmino;
}
export interface GenesisStateAminoMsg {
    type: "/starnamed.x.configuration.v1beta1.GenesisState";
    value: GenesisStateAmino;
}
/** GenesisState - genesis state of x/configuration */
export interface GenesisStateSDKType {
    config: ConfigSDKType;
    fees: FeesSDKType;
}
export declare const Config: {
    typeUrl: string;
    encode(message: Config, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): Config;
    fromPartial(object: Partial<Config>): Config;
    fromAmino(object: ConfigAmino): Config;
    toAmino(message: Config): ConfigAmino;
    fromAminoMsg(object: ConfigAminoMsg): Config;
    fromProtoMsg(message: ConfigProtoMsg): Config;
    toProto(message: Config): Uint8Array;
    toProtoMsg(message: Config): ConfigProtoMsg;
};
export declare const Fees: {
    typeUrl: string;
    encode(message: Fees, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): Fees;
    fromPartial(object: Partial<Fees>): Fees;
    fromAmino(object: FeesAmino): Fees;
    toAmino(message: Fees): FeesAmino;
    fromAminoMsg(object: FeesAminoMsg): Fees;
    fromProtoMsg(message: FeesProtoMsg): Fees;
    toProto(message: Fees): Uint8Array;
    toProtoMsg(message: Fees): FeesProtoMsg;
};
export declare const GenesisState: {
    typeUrl: string;
    encode(message: GenesisState, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): GenesisState;
    fromPartial(object: Partial<GenesisState>): GenesisState;
    fromAmino(object: GenesisStateAmino): GenesisState;
    toAmino(message: GenesisState): GenesisStateAmino;
    fromAminoMsg(object: GenesisStateAminoMsg): GenesisState;
    fromProtoMsg(message: GenesisStateProtoMsg): GenesisState;
    toProto(message: GenesisState): Uint8Array;
    toProtoMsg(message: GenesisState): GenesisStateProtoMsg;
};
