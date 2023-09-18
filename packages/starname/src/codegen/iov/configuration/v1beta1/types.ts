import { Duration, DurationAmino, DurationSDKType } from "../../../google/protobuf/duration";
import { BinaryWriter } from "../../../binary";
import { Decimal } from "@cosmjs/math";
import { isSet } from "../../../helpers";
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
function createBaseConfig(): Config {
  return {
    configurer: "",
    validDomainName: "",
    validAccountName: "",
    validUri: "",
    validResource: "",
    domainRenewalPeriod: Duration.fromPartial({}),
    domainRenewalCountMax: 0,
    domainGracePeriod: Duration.fromPartial({}),
    accountRenewalPeriod: Duration.fromPartial({}),
    accountRenewalCountMax: 0,
    accountGracePeriod: Duration.fromPartial({}),
    resourcesMax: 0,
    certificateSizeMax: BigInt(0),
    certificateCountMax: 0,
    metadataSizeMax: BigInt(0),
    escrowBroker: "",
    escrowCommission: "",
    escrowMaxPeriod: Duration.fromPartial({})
  };
}
export const Config = {
  typeUrl: "/starnamed.x.configuration.v1beta1.Config",
  encode(message: Config, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.configurer !== "") {
      writer.uint32(10).string(message.configurer);
    }
    if (message.validDomainName !== "") {
      writer.uint32(18).string(message.validDomainName);
    }
    if (message.validAccountName !== "") {
      writer.uint32(26).string(message.validAccountName);
    }
    if (message.validUri !== "") {
      writer.uint32(34).string(message.validUri);
    }
    if (message.validResource !== "") {
      writer.uint32(42).string(message.validResource);
    }
    if (message.domainRenewalPeriod !== undefined) {
      Duration.encode(message.domainRenewalPeriod, writer.uint32(50).fork()).ldelim();
    }
    if (message.domainRenewalCountMax !== 0) {
      writer.uint32(56).uint32(message.domainRenewalCountMax);
    }
    if (message.domainGracePeriod !== undefined) {
      Duration.encode(message.domainGracePeriod, writer.uint32(66).fork()).ldelim();
    }
    if (message.accountRenewalPeriod !== undefined) {
      Duration.encode(message.accountRenewalPeriod, writer.uint32(74).fork()).ldelim();
    }
    if (message.accountRenewalCountMax !== 0) {
      writer.uint32(80).uint32(message.accountRenewalCountMax);
    }
    if (message.accountGracePeriod !== undefined) {
      Duration.encode(message.accountGracePeriod, writer.uint32(90).fork()).ldelim();
    }
    if (message.resourcesMax !== 0) {
      writer.uint32(96).uint32(message.resourcesMax);
    }
    if (message.certificateSizeMax !== BigInt(0)) {
      writer.uint32(104).uint64(message.certificateSizeMax);
    }
    if (message.certificateCountMax !== 0) {
      writer.uint32(112).uint32(message.certificateCountMax);
    }
    if (message.metadataSizeMax !== BigInt(0)) {
      writer.uint32(120).uint64(message.metadataSizeMax);
    }
    if (message.escrowBroker !== "") {
      writer.uint32(130).string(message.escrowBroker);
    }
    if (message.escrowCommission !== "") {
      writer.uint32(138).string(Decimal.fromUserInput(message.escrowCommission, 18).atomics);
    }
    if (message.escrowMaxPeriod !== undefined) {
      Duration.encode(message.escrowMaxPeriod, writer.uint32(146).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): Config {
    return {
      configurer: isSet(object.configurer) ? String(object.configurer) : "",
      validDomainName: isSet(object.validDomainName) ? String(object.validDomainName) : "",
      validAccountName: isSet(object.validAccountName) ? String(object.validAccountName) : "",
      validUri: isSet(object.validUri) ? String(object.validUri) : "",
      validResource: isSet(object.validResource) ? String(object.validResource) : "",
      domainRenewalPeriod: isSet(object.domainRenewalPeriod) ? Duration.fromJSON(object.domainRenewalPeriod) : undefined,
      domainRenewalCountMax: isSet(object.domainRenewalCountMax) ? Number(object.domainRenewalCountMax) : 0,
      domainGracePeriod: isSet(object.domainGracePeriod) ? Duration.fromJSON(object.domainGracePeriod) : undefined,
      accountRenewalPeriod: isSet(object.accountRenewalPeriod) ? Duration.fromJSON(object.accountRenewalPeriod) : undefined,
      accountRenewalCountMax: isSet(object.accountRenewalCountMax) ? Number(object.accountRenewalCountMax) : 0,
      accountGracePeriod: isSet(object.accountGracePeriod) ? Duration.fromJSON(object.accountGracePeriod) : undefined,
      resourcesMax: isSet(object.resourcesMax) ? Number(object.resourcesMax) : 0,
      certificateSizeMax: isSet(object.certificateSizeMax) ? BigInt(object.certificateSizeMax.toString()) : BigInt(0),
      certificateCountMax: isSet(object.certificateCountMax) ? Number(object.certificateCountMax) : 0,
      metadataSizeMax: isSet(object.metadataSizeMax) ? BigInt(object.metadataSizeMax.toString()) : BigInt(0),
      escrowBroker: isSet(object.escrowBroker) ? String(object.escrowBroker) : "",
      escrowCommission: isSet(object.escrowCommission) ? String(object.escrowCommission) : "",
      escrowMaxPeriod: isSet(object.escrowMaxPeriod) ? Duration.fromJSON(object.escrowMaxPeriod) : undefined
    };
  },
  fromPartial(object: Partial<Config>): Config {
    const message = createBaseConfig();
    message.configurer = object.configurer ?? "";
    message.validDomainName = object.validDomainName ?? "";
    message.validAccountName = object.validAccountName ?? "";
    message.validUri = object.validUri ?? "";
    message.validResource = object.validResource ?? "";
    message.domainRenewalPeriod = object.domainRenewalPeriod !== undefined && object.domainRenewalPeriod !== null ? Duration.fromPartial(object.domainRenewalPeriod) : undefined;
    message.domainRenewalCountMax = object.domainRenewalCountMax ?? 0;
    message.domainGracePeriod = object.domainGracePeriod !== undefined && object.domainGracePeriod !== null ? Duration.fromPartial(object.domainGracePeriod) : undefined;
    message.accountRenewalPeriod = object.accountRenewalPeriod !== undefined && object.accountRenewalPeriod !== null ? Duration.fromPartial(object.accountRenewalPeriod) : undefined;
    message.accountRenewalCountMax = object.accountRenewalCountMax ?? 0;
    message.accountGracePeriod = object.accountGracePeriod !== undefined && object.accountGracePeriod !== null ? Duration.fromPartial(object.accountGracePeriod) : undefined;
    message.resourcesMax = object.resourcesMax ?? 0;
    message.certificateSizeMax = object.certificateSizeMax !== undefined && object.certificateSizeMax !== null ? BigInt(object.certificateSizeMax.toString()) : BigInt(0);
    message.certificateCountMax = object.certificateCountMax ?? 0;
    message.metadataSizeMax = object.metadataSizeMax !== undefined && object.metadataSizeMax !== null ? BigInt(object.metadataSizeMax.toString()) : BigInt(0);
    message.escrowBroker = object.escrowBroker ?? "";
    message.escrowCommission = object.escrowCommission ?? "";
    message.escrowMaxPeriod = object.escrowMaxPeriod !== undefined && object.escrowMaxPeriod !== null ? Duration.fromPartial(object.escrowMaxPeriod) : undefined;
    return message;
  },
  fromAmino(object: ConfigAmino): Config {
    return {
      configurer: object.configurer,
      validDomainName: object.valid_domain_name,
      validAccountName: object.valid_account_name,
      validUri: object.valid_uri,
      validResource: object.valid_resource,
      domainRenewalPeriod: object?.domain_renewal_period ? Duration.fromAmino(object.domain_renewal_period) : undefined,
      domainRenewalCountMax: object.domain_renewal_count_max,
      domainGracePeriod: object?.domain_grace_period ? Duration.fromAmino(object.domain_grace_period) : undefined,
      accountRenewalPeriod: object?.account_renewal_period ? Duration.fromAmino(object.account_renewal_period) : undefined,
      accountRenewalCountMax: object.account_renewal_count_max,
      accountGracePeriod: object?.account_grace_period ? Duration.fromAmino(object.account_grace_period) : undefined,
      resourcesMax: object.resources_max,
      certificateSizeMax: BigInt(object.certificate_size_max),
      certificateCountMax: object.certificate_count_max,
      metadataSizeMax: BigInt(object.metadata_size_max),
      escrowBroker: object.escrow_broker,
      escrowCommission: object.escrow_commission,
      escrowMaxPeriod: object?.escrow_max_period ? Duration.fromAmino(object.escrow_max_period) : undefined
    };
  },
  toAmino(message: Config): ConfigAmino {
    const obj: any = {};
    obj.configurer = message.configurer;
    obj.valid_domain_name = message.validDomainName;
    obj.valid_account_name = message.validAccountName;
    obj.valid_uri = message.validUri;
    obj.valid_resource = message.validResource;
    obj.domain_renewal_period = message.domainRenewalPeriod ? Duration.toAmino(message.domainRenewalPeriod) : undefined;
    obj.domain_renewal_count_max = message.domainRenewalCountMax;
    obj.domain_grace_period = message.domainGracePeriod ? Duration.toAmino(message.domainGracePeriod) : undefined;
    obj.account_renewal_period = message.accountRenewalPeriod ? Duration.toAmino(message.accountRenewalPeriod) : undefined;
    obj.account_renewal_count_max = message.accountRenewalCountMax;
    obj.account_grace_period = message.accountGracePeriod ? Duration.toAmino(message.accountGracePeriod) : undefined;
    obj.resources_max = message.resourcesMax;
    obj.certificate_size_max = message.certificateSizeMax ? message.certificateSizeMax.toString() : undefined;
    obj.certificate_count_max = message.certificateCountMax;
    obj.metadata_size_max = message.metadataSizeMax ? message.metadataSizeMax.toString() : undefined;
    obj.escrow_broker = message.escrowBroker;
    obj.escrow_commission = message.escrowCommission;
    obj.escrow_max_period = message.escrowMaxPeriod ? Duration.toAmino(message.escrowMaxPeriod) : undefined;
    return obj;
  },
  fromAminoMsg(object: ConfigAminoMsg): Config {
    return Config.fromAmino(object.value);
  },
  fromProtoMsg(message: ConfigProtoMsg): Config {
    return Config.decode(message.value);
  },
  toProto(message: Config): Uint8Array {
    return Config.encode(message).finish();
  },
  toProtoMsg(message: Config): ConfigProtoMsg {
    return {
      typeUrl: "/starnamed.x.configuration.v1beta1.Config",
      value: Config.encode(message).finish()
    };
  }
};
function createBaseFees(): Fees {
  return {
    feeCoinDenom: "",
    feeCoinPrice: "",
    feeDefault: "",
    registerAccountClosed: "",
    registerAccountOpen: "",
    transferAccountClosed: "",
    transferAccountOpen: "",
    replaceAccountResources: "",
    addAccountCertificate: "",
    delAccountCertificate: "",
    setAccountMetadata: "",
    registerDomain1: "",
    registerDomain2: "",
    registerDomain3: "",
    registerDomain4: "",
    registerDomain5: "",
    registerDomainDefault: "",
    registerOpenDomainMultiplier: "",
    transferDomainClosed: "",
    transferDomainOpen: "",
    renewDomainOpen: "",
    createEscrow: "",
    updateEscrow: "",
    transferToEscrow: "",
    refundEscrow: ""
  };
}
export const Fees = {
  typeUrl: "/starnamed.x.configuration.v1beta1.Fees",
  encode(message: Fees, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.feeCoinDenom !== "") {
      writer.uint32(10).string(message.feeCoinDenom);
    }
    if (message.feeCoinPrice !== "") {
      writer.uint32(18).string(Decimal.fromUserInput(message.feeCoinPrice, 18).atomics);
    }
    if (message.feeDefault !== "") {
      writer.uint32(26).string(Decimal.fromUserInput(message.feeDefault, 18).atomics);
    }
    if (message.registerAccountClosed !== "") {
      writer.uint32(34).string(Decimal.fromUserInput(message.registerAccountClosed, 18).atomics);
    }
    if (message.registerAccountOpen !== "") {
      writer.uint32(42).string(Decimal.fromUserInput(message.registerAccountOpen, 18).atomics);
    }
    if (message.transferAccountClosed !== "") {
      writer.uint32(50).string(Decimal.fromUserInput(message.transferAccountClosed, 18).atomics);
    }
    if (message.transferAccountOpen !== "") {
      writer.uint32(58).string(Decimal.fromUserInput(message.transferAccountOpen, 18).atomics);
    }
    if (message.replaceAccountResources !== "") {
      writer.uint32(66).string(Decimal.fromUserInput(message.replaceAccountResources, 18).atomics);
    }
    if (message.addAccountCertificate !== "") {
      writer.uint32(74).string(Decimal.fromUserInput(message.addAccountCertificate, 18).atomics);
    }
    if (message.delAccountCertificate !== "") {
      writer.uint32(82).string(Decimal.fromUserInput(message.delAccountCertificate, 18).atomics);
    }
    if (message.setAccountMetadata !== "") {
      writer.uint32(90).string(Decimal.fromUserInput(message.setAccountMetadata, 18).atomics);
    }
    if (message.registerDomain1 !== "") {
      writer.uint32(98).string(Decimal.fromUserInput(message.registerDomain1, 18).atomics);
    }
    if (message.registerDomain2 !== "") {
      writer.uint32(106).string(Decimal.fromUserInput(message.registerDomain2, 18).atomics);
    }
    if (message.registerDomain3 !== "") {
      writer.uint32(114).string(Decimal.fromUserInput(message.registerDomain3, 18).atomics);
    }
    if (message.registerDomain4 !== "") {
      writer.uint32(122).string(Decimal.fromUserInput(message.registerDomain4, 18).atomics);
    }
    if (message.registerDomain5 !== "") {
      writer.uint32(130).string(Decimal.fromUserInput(message.registerDomain5, 18).atomics);
    }
    if (message.registerDomainDefault !== "") {
      writer.uint32(138).string(Decimal.fromUserInput(message.registerDomainDefault, 18).atomics);
    }
    if (message.registerOpenDomainMultiplier !== "") {
      writer.uint32(146).string(Decimal.fromUserInput(message.registerOpenDomainMultiplier, 18).atomics);
    }
    if (message.transferDomainClosed !== "") {
      writer.uint32(154).string(Decimal.fromUserInput(message.transferDomainClosed, 18).atomics);
    }
    if (message.transferDomainOpen !== "") {
      writer.uint32(162).string(Decimal.fromUserInput(message.transferDomainOpen, 18).atomics);
    }
    if (message.renewDomainOpen !== "") {
      writer.uint32(170).string(Decimal.fromUserInput(message.renewDomainOpen, 18).atomics);
    }
    if (message.createEscrow !== "") {
      writer.uint32(178).string(Decimal.fromUserInput(message.createEscrow, 18).atomics);
    }
    if (message.updateEscrow !== "") {
      writer.uint32(186).string(Decimal.fromUserInput(message.updateEscrow, 18).atomics);
    }
    if (message.transferToEscrow !== "") {
      writer.uint32(194).string(Decimal.fromUserInput(message.transferToEscrow, 18).atomics);
    }
    if (message.refundEscrow !== "") {
      writer.uint32(202).string(Decimal.fromUserInput(message.refundEscrow, 18).atomics);
    }
    return writer;
  },
  fromJSON(object: any): Fees {
    return {
      feeCoinDenom: isSet(object.feeCoinDenom) ? String(object.feeCoinDenom) : "",
      feeCoinPrice: isSet(object.feeCoinPrice) ? String(object.feeCoinPrice) : "",
      feeDefault: isSet(object.feeDefault) ? String(object.feeDefault) : "",
      registerAccountClosed: isSet(object.registerAccountClosed) ? String(object.registerAccountClosed) : "",
      registerAccountOpen: isSet(object.registerAccountOpen) ? String(object.registerAccountOpen) : "",
      transferAccountClosed: isSet(object.transferAccountClosed) ? String(object.transferAccountClosed) : "",
      transferAccountOpen: isSet(object.transferAccountOpen) ? String(object.transferAccountOpen) : "",
      replaceAccountResources: isSet(object.replaceAccountResources) ? String(object.replaceAccountResources) : "",
      addAccountCertificate: isSet(object.addAccountCertificate) ? String(object.addAccountCertificate) : "",
      delAccountCertificate: isSet(object.delAccountCertificate) ? String(object.delAccountCertificate) : "",
      setAccountMetadata: isSet(object.setAccountMetadata) ? String(object.setAccountMetadata) : "",
      registerDomain1: isSet(object.registerDomain1) ? String(object.registerDomain1) : "",
      registerDomain2: isSet(object.registerDomain2) ? String(object.registerDomain2) : "",
      registerDomain3: isSet(object.registerDomain3) ? String(object.registerDomain3) : "",
      registerDomain4: isSet(object.registerDomain4) ? String(object.registerDomain4) : "",
      registerDomain5: isSet(object.registerDomain5) ? String(object.registerDomain5) : "",
      registerDomainDefault: isSet(object.registerDomainDefault) ? String(object.registerDomainDefault) : "",
      registerOpenDomainMultiplier: isSet(object.registerOpenDomainMultiplier) ? String(object.registerOpenDomainMultiplier) : "",
      transferDomainClosed: isSet(object.transferDomainClosed) ? String(object.transferDomainClosed) : "",
      transferDomainOpen: isSet(object.transferDomainOpen) ? String(object.transferDomainOpen) : "",
      renewDomainOpen: isSet(object.renewDomainOpen) ? String(object.renewDomainOpen) : "",
      createEscrow: isSet(object.createEscrow) ? String(object.createEscrow) : "",
      updateEscrow: isSet(object.updateEscrow) ? String(object.updateEscrow) : "",
      transferToEscrow: isSet(object.transferToEscrow) ? String(object.transferToEscrow) : "",
      refundEscrow: isSet(object.refundEscrow) ? String(object.refundEscrow) : ""
    };
  },
  fromPartial(object: Partial<Fees>): Fees {
    const message = createBaseFees();
    message.feeCoinDenom = object.feeCoinDenom ?? "";
    message.feeCoinPrice = object.feeCoinPrice ?? "";
    message.feeDefault = object.feeDefault ?? "";
    message.registerAccountClosed = object.registerAccountClosed ?? "";
    message.registerAccountOpen = object.registerAccountOpen ?? "";
    message.transferAccountClosed = object.transferAccountClosed ?? "";
    message.transferAccountOpen = object.transferAccountOpen ?? "";
    message.replaceAccountResources = object.replaceAccountResources ?? "";
    message.addAccountCertificate = object.addAccountCertificate ?? "";
    message.delAccountCertificate = object.delAccountCertificate ?? "";
    message.setAccountMetadata = object.setAccountMetadata ?? "";
    message.registerDomain1 = object.registerDomain1 ?? "";
    message.registerDomain2 = object.registerDomain2 ?? "";
    message.registerDomain3 = object.registerDomain3 ?? "";
    message.registerDomain4 = object.registerDomain4 ?? "";
    message.registerDomain5 = object.registerDomain5 ?? "";
    message.registerDomainDefault = object.registerDomainDefault ?? "";
    message.registerOpenDomainMultiplier = object.registerOpenDomainMultiplier ?? "";
    message.transferDomainClosed = object.transferDomainClosed ?? "";
    message.transferDomainOpen = object.transferDomainOpen ?? "";
    message.renewDomainOpen = object.renewDomainOpen ?? "";
    message.createEscrow = object.createEscrow ?? "";
    message.updateEscrow = object.updateEscrow ?? "";
    message.transferToEscrow = object.transferToEscrow ?? "";
    message.refundEscrow = object.refundEscrow ?? "";
    return message;
  },
  fromAmino(object: FeesAmino): Fees {
    return {
      feeCoinDenom: object.fee_coin_denom,
      feeCoinPrice: object.fee_coin_price,
      feeDefault: object.fee_default,
      registerAccountClosed: object.register_account_closed,
      registerAccountOpen: object.register_account_open,
      transferAccountClosed: object.transfer_account_closed,
      transferAccountOpen: object.transfer_account_open,
      replaceAccountResources: object.replace_account_resources,
      addAccountCertificate: object.add_account_certificate,
      delAccountCertificate: object.del_account_certificate,
      setAccountMetadata: object.set_account_metadata,
      registerDomain1: object.register_domain_1,
      registerDomain2: object.register_domain_2,
      registerDomain3: object.register_domain_3,
      registerDomain4: object.register_domain_4,
      registerDomain5: object.register_domain_5,
      registerDomainDefault: object.register_domain_default,
      registerOpenDomainMultiplier: object.register_open_domain_multiplier,
      transferDomainClosed: object.transfer_domain_closed,
      transferDomainOpen: object.transfer_domain_open,
      renewDomainOpen: object.renew_domain_open,
      createEscrow: object.create_escrow,
      updateEscrow: object.update_escrow,
      transferToEscrow: object.transfer_to_escrow,
      refundEscrow: object.refund_escrow
    };
  },
  toAmino(message: Fees): FeesAmino {
    const obj: any = {};
    obj.fee_coin_denom = message.feeCoinDenom;
    obj.fee_coin_price = message.feeCoinPrice;
    obj.fee_default = message.feeDefault;
    obj.register_account_closed = message.registerAccountClosed;
    obj.register_account_open = message.registerAccountOpen;
    obj.transfer_account_closed = message.transferAccountClosed;
    obj.transfer_account_open = message.transferAccountOpen;
    obj.replace_account_resources = message.replaceAccountResources;
    obj.add_account_certificate = message.addAccountCertificate;
    obj.del_account_certificate = message.delAccountCertificate;
    obj.set_account_metadata = message.setAccountMetadata;
    obj.register_domain_1 = message.registerDomain1;
    obj.register_domain_2 = message.registerDomain2;
    obj.register_domain_3 = message.registerDomain3;
    obj.register_domain_4 = message.registerDomain4;
    obj.register_domain_5 = message.registerDomain5;
    obj.register_domain_default = message.registerDomainDefault;
    obj.register_open_domain_multiplier = message.registerOpenDomainMultiplier;
    obj.transfer_domain_closed = message.transferDomainClosed;
    obj.transfer_domain_open = message.transferDomainOpen;
    obj.renew_domain_open = message.renewDomainOpen;
    obj.create_escrow = message.createEscrow;
    obj.update_escrow = message.updateEscrow;
    obj.transfer_to_escrow = message.transferToEscrow;
    obj.refund_escrow = message.refundEscrow;
    return obj;
  },
  fromAminoMsg(object: FeesAminoMsg): Fees {
    return Fees.fromAmino(object.value);
  },
  fromProtoMsg(message: FeesProtoMsg): Fees {
    return Fees.decode(message.value);
  },
  toProto(message: Fees): Uint8Array {
    return Fees.encode(message).finish();
  },
  toProtoMsg(message: Fees): FeesProtoMsg {
    return {
      typeUrl: "/starnamed.x.configuration.v1beta1.Fees",
      value: Fees.encode(message).finish()
    };
  }
};
function createBaseGenesisState(): GenesisState {
  return {
    config: Config.fromPartial({}),
    fees: Fees.fromPartial({})
  };
}
export const GenesisState = {
  typeUrl: "/starnamed.x.configuration.v1beta1.GenesisState",
  encode(message: GenesisState, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.config !== undefined) {
      Config.encode(message.config, writer.uint32(10).fork()).ldelim();
    }
    if (message.fees !== undefined) {
      Fees.encode(message.fees, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): GenesisState {
    return {
      config: isSet(object.config) ? Config.fromJSON(object.config) : undefined,
      fees: isSet(object.fees) ? Fees.fromJSON(object.fees) : undefined
    };
  },
  fromPartial(object: Partial<GenesisState>): GenesisState {
    const message = createBaseGenesisState();
    message.config = object.config !== undefined && object.config !== null ? Config.fromPartial(object.config) : undefined;
    message.fees = object.fees !== undefined && object.fees !== null ? Fees.fromPartial(object.fees) : undefined;
    return message;
  },
  fromAmino(object: GenesisStateAmino): GenesisState {
    return {
      config: object?.config ? Config.fromAmino(object.config) : undefined,
      fees: object?.fees ? Fees.fromAmino(object.fees) : undefined
    };
  },
  toAmino(message: GenesisState): GenesisStateAmino {
    const obj: any = {};
    obj.config = message.config ? Config.toAmino(message.config) : undefined;
    obj.fees = message.fees ? Fees.toAmino(message.fees) : undefined;
    return obj;
  },
  fromAminoMsg(object: GenesisStateAminoMsg): GenesisState {
    return GenesisState.fromAmino(object.value);
  },
  fromProtoMsg(message: GenesisStateProtoMsg): GenesisState {
    return GenesisState.decode(message.value);
  },
  toProto(message: GenesisState): Uint8Array {
    return GenesisState.encode(message).finish();
  },
  toProtoMsg(message: GenesisState): GenesisStateProtoMsg {
    return {
      typeUrl: "/starnamed.x.configuration.v1beta1.GenesisState",
      value: GenesisState.encode(message).finish()
    };
  }
};