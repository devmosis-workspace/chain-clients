import { Duration, DurationSDKType } from "../../../google/protobuf/duration";
import { Long } from "../../../helpers";
import * as _m0 from "protobufjs/minimal";
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
    domainRenewalPeriod?: Duration;
    /**
     * DomainRenewalCountMax defines maximum number of domain renewals a user can
     * do
     */
    domainRenewalCountMax: number;
    /** DomainGracePeriod defines the grace period for a domain deletion in seconds */
    domainGracePeriod?: Duration;
    /**
     * AccountRenewalPeriod defines the duration of the account renewal period in
     * seconds
     */
    accountRenewalPeriod?: Duration;
    /**
     * AccountRenewalCountMax defines maximum number of account renewals a user
     * can do
     */
    accountRenewalCountMax: number;
    /** DomainGracePeriod defines the grace period for a domain deletion in seconds */
    accountGracePeriod?: Duration;
    /**
     * ResourcesMax defines maximum number of resources could be saved under an
     * account
     */
    resourcesMax: number;
    /**
     * CertificateSizeMax defines maximum size of a certificate that could be
     * saved under an account
     */
    certificateSizeMax: Long;
    /**
     * CertificateCountMax defines maximum number of certificates that could be
     * saved under an account
     */
    certificateCountMax: number;
    /**
     * MetadataSizeMax defines maximum size of metadata that could be saved under
     * an account
     */
    metadataSizeMax: Long;
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
    escrowMaxPeriod?: Duration;
}
/** Config is the configuration of the network */
export interface ConfigSDKType {
    configurer: string;
    valid_domain_name: string;
    valid_account_name: string;
    valid_uri: string;
    valid_resource: string;
    domain_renewal_period?: DurationSDKType;
    domain_renewal_count_max: number;
    domain_grace_period?: DurationSDKType;
    account_renewal_period?: DurationSDKType;
    account_renewal_count_max: number;
    account_grace_period?: DurationSDKType;
    resources_max: number;
    certificate_size_max: Long;
    certificate_count_max: number;
    metadata_size_max: Long;
    escrow_broker: string;
    escrow_commission: string;
    escrow_max_period?: DurationSDKType;
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
    config?: Config;
    fees?: Fees;
}
/** GenesisState - genesis state of x/configuration */
export interface GenesisStateSDKType {
    config?: ConfigSDKType;
    fees?: FeesSDKType;
}
export declare const Config: {
    encode(message: Config, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): Config;
    fromPartial(object: Partial<Config>): Config;
};
export declare const Fees: {
    encode(message: Fees, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): Fees;
    fromPartial(object: Partial<Fees>): Fees;
};
export declare const GenesisState: {
    encode(message: GenesisState, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): GenesisState;
    fromPartial(object: Partial<GenesisState>): GenesisState;
};
