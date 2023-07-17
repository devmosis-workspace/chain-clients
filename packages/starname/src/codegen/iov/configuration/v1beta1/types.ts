import { Duration, DurationSDKType } from "../../../google/protobuf/duration";
import { Long, isSet } from "../../../helpers";
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
function createBaseConfig(): Config {
  return {
    configurer: "",
    validDomainName: "",
    validAccountName: "",
    validUri: "",
    validResource: "",
    domainRenewalPeriod: undefined,
    domainRenewalCountMax: 0,
    domainGracePeriod: undefined,
    accountRenewalPeriod: undefined,
    accountRenewalCountMax: 0,
    accountGracePeriod: undefined,
    resourcesMax: 0,
    certificateSizeMax: Long.UZERO,
    certificateCountMax: 0,
    metadataSizeMax: Long.UZERO,
    escrowBroker: "",
    escrowCommission: "",
    escrowMaxPeriod: undefined
  };
}
export const Config = {
  encode(message: Config, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
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
    if (!message.certificateSizeMax.isZero()) {
      writer.uint32(104).uint64(message.certificateSizeMax);
    }
    if (message.certificateCountMax !== 0) {
      writer.uint32(112).uint32(message.certificateCountMax);
    }
    if (!message.metadataSizeMax.isZero()) {
      writer.uint32(120).uint64(message.metadataSizeMax);
    }
    if (message.escrowBroker !== "") {
      writer.uint32(130).string(message.escrowBroker);
    }
    if (message.escrowCommission !== "") {
      writer.uint32(138).string(message.escrowCommission);
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
      certificateSizeMax: isSet(object.certificateSizeMax) ? Long.fromValue(object.certificateSizeMax) : Long.UZERO,
      certificateCountMax: isSet(object.certificateCountMax) ? Number(object.certificateCountMax) : 0,
      metadataSizeMax: isSet(object.metadataSizeMax) ? Long.fromValue(object.metadataSizeMax) : Long.UZERO,
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
    message.certificateSizeMax = object.certificateSizeMax !== undefined && object.certificateSizeMax !== null ? Long.fromValue(object.certificateSizeMax) : Long.UZERO;
    message.certificateCountMax = object.certificateCountMax ?? 0;
    message.metadataSizeMax = object.metadataSizeMax !== undefined && object.metadataSizeMax !== null ? Long.fromValue(object.metadataSizeMax) : Long.UZERO;
    message.escrowBroker = object.escrowBroker ?? "";
    message.escrowCommission = object.escrowCommission ?? "";
    message.escrowMaxPeriod = object.escrowMaxPeriod !== undefined && object.escrowMaxPeriod !== null ? Duration.fromPartial(object.escrowMaxPeriod) : undefined;
    return message;
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
  encode(message: Fees, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.feeCoinDenom !== "") {
      writer.uint32(10).string(message.feeCoinDenom);
    }
    if (message.feeCoinPrice !== "") {
      writer.uint32(18).string(message.feeCoinPrice);
    }
    if (message.feeDefault !== "") {
      writer.uint32(26).string(message.feeDefault);
    }
    if (message.registerAccountClosed !== "") {
      writer.uint32(34).string(message.registerAccountClosed);
    }
    if (message.registerAccountOpen !== "") {
      writer.uint32(42).string(message.registerAccountOpen);
    }
    if (message.transferAccountClosed !== "") {
      writer.uint32(50).string(message.transferAccountClosed);
    }
    if (message.transferAccountOpen !== "") {
      writer.uint32(58).string(message.transferAccountOpen);
    }
    if (message.replaceAccountResources !== "") {
      writer.uint32(66).string(message.replaceAccountResources);
    }
    if (message.addAccountCertificate !== "") {
      writer.uint32(74).string(message.addAccountCertificate);
    }
    if (message.delAccountCertificate !== "") {
      writer.uint32(82).string(message.delAccountCertificate);
    }
    if (message.setAccountMetadata !== "") {
      writer.uint32(90).string(message.setAccountMetadata);
    }
    if (message.registerDomain1 !== "") {
      writer.uint32(98).string(message.registerDomain1);
    }
    if (message.registerDomain2 !== "") {
      writer.uint32(106).string(message.registerDomain2);
    }
    if (message.registerDomain3 !== "") {
      writer.uint32(114).string(message.registerDomain3);
    }
    if (message.registerDomain4 !== "") {
      writer.uint32(122).string(message.registerDomain4);
    }
    if (message.registerDomain5 !== "") {
      writer.uint32(130).string(message.registerDomain5);
    }
    if (message.registerDomainDefault !== "") {
      writer.uint32(138).string(message.registerDomainDefault);
    }
    if (message.registerOpenDomainMultiplier !== "") {
      writer.uint32(146).string(message.registerOpenDomainMultiplier);
    }
    if (message.transferDomainClosed !== "") {
      writer.uint32(154).string(message.transferDomainClosed);
    }
    if (message.transferDomainOpen !== "") {
      writer.uint32(162).string(message.transferDomainOpen);
    }
    if (message.renewDomainOpen !== "") {
      writer.uint32(170).string(message.renewDomainOpen);
    }
    if (message.createEscrow !== "") {
      writer.uint32(178).string(message.createEscrow);
    }
    if (message.updateEscrow !== "") {
      writer.uint32(186).string(message.updateEscrow);
    }
    if (message.transferToEscrow !== "") {
      writer.uint32(194).string(message.transferToEscrow);
    }
    if (message.refundEscrow !== "") {
      writer.uint32(202).string(message.refundEscrow);
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
  }
};
function createBaseGenesisState(): GenesisState {
  return {
    config: undefined,
    fees: undefined
  };
}
export const GenesisState = {
  encode(message: GenesisState, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
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
  }
};