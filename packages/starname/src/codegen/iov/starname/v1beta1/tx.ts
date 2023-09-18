import { Resource, ResourceAmino, ResourceSDKType } from "./types";
import { BinaryWriter } from "../../../binary";
import { isSet, bytesFromBase64 } from "../../../helpers";
/**
 * MsgAddAccountCertificate is the message used when a user wants to add new
 * certificates to his account
 */
export interface MsgAddAccountCertificate {
  /** Domain is the domain of the account */
  domain: string;
  /** Name is the name of the account */
  name: string;
  /** Owner is the owner of the account */
  owner: string;
  /**
   * Payer is the address of the entity that pays the product and transaction
   * fees
   */
  payer: string;
  /** NewCertificate is the new certificate to add */
  newCertificate: Uint8Array;
}
export interface MsgAddAccountCertificateProtoMsg {
  typeUrl: "/starnamed.x.starname.v1beta1.MsgAddAccountCertificate";
  value: Uint8Array;
}
/**
 * MsgAddAccountCertificate is the message used when a user wants to add new
 * certificates to his account
 */
export interface MsgAddAccountCertificateAmino {
  /** Domain is the domain of the account */
  domain: string;
  /** Name is the name of the account */
  name: string;
  /** Owner is the owner of the account */
  owner: string;
  /**
   * Payer is the address of the entity that pays the product and transaction
   * fees
   */
  payer: string;
  /** NewCertificate is the new certificate to add */
  new_certificate: Uint8Array;
}
export interface MsgAddAccountCertificateAminoMsg {
  type: "/starnamed.x.starname.v1beta1.MsgAddAccountCertificate";
  value: MsgAddAccountCertificateAmino;
}
/**
 * MsgAddAccountCertificate is the message used when a user wants to add new
 * certificates to his account
 */
export interface MsgAddAccountCertificateSDKType {
  domain: string;
  name: string;
  owner: string;
  payer: string;
  new_certificate: Uint8Array;
}
/** MsgAddAccountCertificateResponse returns an empty response. */
export interface MsgAddAccountCertificateResponse {}
export interface MsgAddAccountCertificateResponseProtoMsg {
  typeUrl: "/starnamed.x.starname.v1beta1.MsgAddAccountCertificateResponse";
  value: Uint8Array;
}
/** MsgAddAccountCertificateResponse returns an empty response. */
export interface MsgAddAccountCertificateResponseAmino {}
export interface MsgAddAccountCertificateResponseAminoMsg {
  type: "/starnamed.x.starname.v1beta1.MsgAddAccountCertificateResponse";
  value: MsgAddAccountCertificateResponseAmino;
}
/** MsgAddAccountCertificateResponse returns an empty response. */
export interface MsgAddAccountCertificateResponseSDKType {}
/**
 * MsgDeleteAccountCertificate is the request model used to remove certificates
 * from an account
 */
export interface MsgDeleteAccountCertificate {
  /** Domain is the domain of the account */
  domain: string;
  /** Name is the name of the account */
  name: string;
  /** Owner is the owner of the account */
  owner: string;
  /**
   * Payer is the address of the entity that pays the product and transaction
   * fees
   */
  payer: string;
  /** DeleteCertificate is the certificate to delete */
  deleteCertificate: Uint8Array;
}
export interface MsgDeleteAccountCertificateProtoMsg {
  typeUrl: "/starnamed.x.starname.v1beta1.MsgDeleteAccountCertificate";
  value: Uint8Array;
}
/**
 * MsgDeleteAccountCertificate is the request model used to remove certificates
 * from an account
 */
export interface MsgDeleteAccountCertificateAmino {
  /** Domain is the domain of the account */
  domain: string;
  /** Name is the name of the account */
  name: string;
  /** Owner is the owner of the account */
  owner: string;
  /**
   * Payer is the address of the entity that pays the product and transaction
   * fees
   */
  payer: string;
  /** DeleteCertificate is the certificate to delete */
  delete_certificate: Uint8Array;
}
export interface MsgDeleteAccountCertificateAminoMsg {
  type: "/starnamed.x.starname.v1beta1.MsgDeleteAccountCertificate";
  value: MsgDeleteAccountCertificateAmino;
}
/**
 * MsgDeleteAccountCertificate is the request model used to remove certificates
 * from an account
 */
export interface MsgDeleteAccountCertificateSDKType {
  domain: string;
  name: string;
  owner: string;
  payer: string;
  delete_certificate: Uint8Array;
}
/** MsgDeleteAccountCertificateResponse returns an empty response. */
export interface MsgDeleteAccountCertificateResponse {}
export interface MsgDeleteAccountCertificateResponseProtoMsg {
  typeUrl: "/starnamed.x.starname.v1beta1.MsgDeleteAccountCertificateResponse";
  value: Uint8Array;
}
/** MsgDeleteAccountCertificateResponse returns an empty response. */
export interface MsgDeleteAccountCertificateResponseAmino {}
export interface MsgDeleteAccountCertificateResponseAminoMsg {
  type: "/starnamed.x.starname.v1beta1.MsgDeleteAccountCertificateResponse";
  value: MsgDeleteAccountCertificateResponseAmino;
}
/** MsgDeleteAccountCertificateResponse returns an empty response. */
export interface MsgDeleteAccountCertificateResponseSDKType {}
/** MsgDeleteAccount is the request model used to delete an account */
export interface MsgDeleteAccount {
  /** Domain is the domain of the account */
  domain: string;
  /** Name is the name of the account */
  name: string;
  /** Owner is the owner of the account */
  owner: string;
  /**
   * Payer is the address of the entity that pays the product and transaction
   * fees
   */
  payer: string;
}
export interface MsgDeleteAccountProtoMsg {
  typeUrl: "/starnamed.x.starname.v1beta1.MsgDeleteAccount";
  value: Uint8Array;
}
/** MsgDeleteAccount is the request model used to delete an account */
export interface MsgDeleteAccountAmino {
  /** Domain is the domain of the account */
  domain: string;
  /** Name is the name of the account */
  name: string;
  /** Owner is the owner of the account */
  owner: string;
  /**
   * Payer is the address of the entity that pays the product and transaction
   * fees
   */
  payer: string;
}
export interface MsgDeleteAccountAminoMsg {
  type: "/starnamed.x.starname.v1beta1.MsgDeleteAccount";
  value: MsgDeleteAccountAmino;
}
/** MsgDeleteAccount is the request model used to delete an account */
export interface MsgDeleteAccountSDKType {
  domain: string;
  name: string;
  owner: string;
  payer: string;
}
/** MsgDeleteAccountResponse returns an empty response. */
export interface MsgDeleteAccountResponse {}
export interface MsgDeleteAccountResponseProtoMsg {
  typeUrl: "/starnamed.x.starname.v1beta1.MsgDeleteAccountResponse";
  value: Uint8Array;
}
/** MsgDeleteAccountResponse returns an empty response. */
export interface MsgDeleteAccountResponseAmino {}
export interface MsgDeleteAccountResponseAminoMsg {
  type: "/starnamed.x.starname.v1beta1.MsgDeleteAccountResponse";
  value: MsgDeleteAccountResponseAmino;
}
/** MsgDeleteAccountResponse returns an empty response. */
export interface MsgDeleteAccountResponseSDKType {}
/** MsgDeleteDomain is the request model to delete a domain */
export interface MsgDeleteDomain {
  /** Domain is the domain of the account */
  domain: string;
  /** Owner is the owner of the account */
  owner: string;
  /**
   * Payer is the address of the entity that pays the product and transaction
   * fees
   */
  payer: string;
}
export interface MsgDeleteDomainProtoMsg {
  typeUrl: "/starnamed.x.starname.v1beta1.MsgDeleteDomain";
  value: Uint8Array;
}
/** MsgDeleteDomain is the request model to delete a domain */
export interface MsgDeleteDomainAmino {
  /** Domain is the domain of the account */
  domain: string;
  /** Owner is the owner of the account */
  owner: string;
  /**
   * Payer is the address of the entity that pays the product and transaction
   * fees
   */
  payer: string;
}
export interface MsgDeleteDomainAminoMsg {
  type: "/starnamed.x.starname.v1beta1.MsgDeleteDomain";
  value: MsgDeleteDomainAmino;
}
/** MsgDeleteDomain is the request model to delete a domain */
export interface MsgDeleteDomainSDKType {
  domain: string;
  owner: string;
  payer: string;
}
/** MsgDeleteDomainResponse returns an empty response. */
export interface MsgDeleteDomainResponse {}
export interface MsgDeleteDomainResponseProtoMsg {
  typeUrl: "/starnamed.x.starname.v1beta1.MsgDeleteDomainResponse";
  value: Uint8Array;
}
/** MsgDeleteDomainResponse returns an empty response. */
export interface MsgDeleteDomainResponseAmino {}
export interface MsgDeleteDomainResponseAminoMsg {
  type: "/starnamed.x.starname.v1beta1.MsgDeleteDomainResponse";
  value: MsgDeleteDomainResponseAmino;
}
/** MsgDeleteDomainResponse returns an empty response. */
export interface MsgDeleteDomainResponseSDKType {}
/** MsgRegisterAccount is the request model used to register new accounts */
export interface MsgRegisterAccount {
  /** Domain is the domain of the account */
  domain: string;
  /** Name is the name of the account */
  name: string;
  /** Owner is the owner of the account */
  owner: string;
  /**
   * Payer is the address of the entity that pays the product and transaction
   * fees
   */
  payer: string;
  /** Broker is the account that facilitated the transaction */
  broker: string;
  /** Registerer is the user who registers this account */
  registerer: string;
  /** Resources are the blockchain addresses of the account */
  resources: Resource[];
}
export interface MsgRegisterAccountProtoMsg {
  typeUrl: "/starnamed.x.starname.v1beta1.MsgRegisterAccount";
  value: Uint8Array;
}
/** MsgRegisterAccount is the request model used to register new accounts */
export interface MsgRegisterAccountAmino {
  /** Domain is the domain of the account */
  domain: string;
  /** Name is the name of the account */
  name: string;
  /** Owner is the owner of the account */
  owner: string;
  /**
   * Payer is the address of the entity that pays the product and transaction
   * fees
   */
  payer: string;
  /** Broker is the account that facilitated the transaction */
  broker: string;
  /** Registerer is the user who registers this account */
  registerer: string;
  /** Resources are the blockchain addresses of the account */
  resources: ResourceAmino[];
}
export interface MsgRegisterAccountAminoMsg {
  type: "/starnamed.x.starname.v1beta1.MsgRegisterAccount";
  value: MsgRegisterAccountAmino;
}
/** MsgRegisterAccount is the request model used to register new accounts */
export interface MsgRegisterAccountSDKType {
  domain: string;
  name: string;
  owner: string;
  payer: string;
  broker: string;
  registerer: string;
  resources: ResourceSDKType[];
}
/** MsgRegisterAccountResponse returns an empty response. */
export interface MsgRegisterAccountResponse {}
export interface MsgRegisterAccountResponseProtoMsg {
  typeUrl: "/starnamed.x.starname.v1beta1.MsgRegisterAccountResponse";
  value: Uint8Array;
}
/** MsgRegisterAccountResponse returns an empty response. */
export interface MsgRegisterAccountResponseAmino {}
export interface MsgRegisterAccountResponseAminoMsg {
  type: "/starnamed.x.starname.v1beta1.MsgRegisterAccountResponse";
  value: MsgRegisterAccountResponseAmino;
}
/** MsgRegisterAccountResponse returns an empty response. */
export interface MsgRegisterAccountResponseSDKType {}
/** MsgRegisterDomain is the request used to register new domains */
export interface MsgRegisterDomain {
  name: string;
  admin: string;
  /**
   * Payer is the address of the entity that pays the product and transaction
   * fees
   */
  payer: string;
  /** Broker is the account that facilitated the transaction */
  broker: string;
  /** DomainType defines the type of the domain */
  domainType: string;
}
export interface MsgRegisterDomainProtoMsg {
  typeUrl: "/starnamed.x.starname.v1beta1.MsgRegisterDomain";
  value: Uint8Array;
}
/** MsgRegisterDomain is the request used to register new domains */
export interface MsgRegisterDomainAmino {
  name: string;
  admin: string;
  /**
   * Payer is the address of the entity that pays the product and transaction
   * fees
   */
  payer: string;
  /** Broker is the account that facilitated the transaction */
  broker: string;
  /** DomainType defines the type of the domain */
  domain_type: string;
}
export interface MsgRegisterDomainAminoMsg {
  type: "/starnamed.x.starname.v1beta1.MsgRegisterDomain";
  value: MsgRegisterDomainAmino;
}
/** MsgRegisterDomain is the request used to register new domains */
export interface MsgRegisterDomainSDKType {
  name: string;
  admin: string;
  payer: string;
  broker: string;
  domain_type: string;
}
/** MsgRegisterDomainResponse returns an empty response. */
export interface MsgRegisterDomainResponse {}
export interface MsgRegisterDomainResponseProtoMsg {
  typeUrl: "/starnamed.x.starname.v1beta1.MsgRegisterDomainResponse";
  value: Uint8Array;
}
/** MsgRegisterDomainResponse returns an empty response. */
export interface MsgRegisterDomainResponseAmino {}
export interface MsgRegisterDomainResponseAminoMsg {
  type: "/starnamed.x.starname.v1beta1.MsgRegisterDomainResponse";
  value: MsgRegisterDomainResponseAmino;
}
/** MsgRegisterDomainResponse returns an empty response. */
export interface MsgRegisterDomainResponseSDKType {}
/** MsgRenewAccount is the request model used to renew accounts */
export interface MsgRenewAccount {
  /** Domain is the domain of the account */
  domain: string;
  /** Name is the name of the account */
  name: string;
  /** Signer is the signer of the request */
  signer: string;
  /**
   * Payer is the address of the entity that pays the product and transaction
   * fees
   */
  payer: string;
}
export interface MsgRenewAccountProtoMsg {
  typeUrl: "/starnamed.x.starname.v1beta1.MsgRenewAccount";
  value: Uint8Array;
}
/** MsgRenewAccount is the request model used to renew accounts */
export interface MsgRenewAccountAmino {
  /** Domain is the domain of the account */
  domain: string;
  /** Name is the name of the account */
  name: string;
  /** Signer is the signer of the request */
  signer: string;
  /**
   * Payer is the address of the entity that pays the product and transaction
   * fees
   */
  payer: string;
}
export interface MsgRenewAccountAminoMsg {
  type: "/starnamed.x.starname.v1beta1.MsgRenewAccount";
  value: MsgRenewAccountAmino;
}
/** MsgRenewAccount is the request model used to renew accounts */
export interface MsgRenewAccountSDKType {
  domain: string;
  name: string;
  signer: string;
  payer: string;
}
/** MsgRenewAccountResponse returns an empty response. */
export interface MsgRenewAccountResponse {}
export interface MsgRenewAccountResponseProtoMsg {
  typeUrl: "/starnamed.x.starname.v1beta1.MsgRenewAccountResponse";
  value: Uint8Array;
}
/** MsgRenewAccountResponse returns an empty response. */
export interface MsgRenewAccountResponseAmino {}
export interface MsgRenewAccountResponseAminoMsg {
  type: "/starnamed.x.starname.v1beta1.MsgRenewAccountResponse";
  value: MsgRenewAccountResponseAmino;
}
/** MsgRenewAccountResponse returns an empty response. */
export interface MsgRenewAccountResponseSDKType {}
/** MsgRenewDomain is the request model used to renew a domain */
export interface MsgRenewDomain {
  /** Domain is the domain of the account */
  domain: string;
  /** Signer is the signer of the request */
  signer: string;
  /**
   * Payer is the address of the entity that pays the product and transaction
   * fees
   */
  payer: string;
}
export interface MsgRenewDomainProtoMsg {
  typeUrl: "/starnamed.x.starname.v1beta1.MsgRenewDomain";
  value: Uint8Array;
}
/** MsgRenewDomain is the request model used to renew a domain */
export interface MsgRenewDomainAmino {
  /** Domain is the domain of the account */
  domain: string;
  /** Signer is the signer of the request */
  signer: string;
  /**
   * Payer is the address of the entity that pays the product and transaction
   * fees
   */
  payer: string;
}
export interface MsgRenewDomainAminoMsg {
  type: "/starnamed.x.starname.v1beta1.MsgRenewDomain";
  value: MsgRenewDomainAmino;
}
/** MsgRenewDomain is the request model used to renew a domain */
export interface MsgRenewDomainSDKType {
  domain: string;
  signer: string;
  payer: string;
}
/** MsgRegisterDomain returns an empty response. */
export interface MsgRenewDomainResponse {}
export interface MsgRenewDomainResponseProtoMsg {
  typeUrl: "/starnamed.x.starname.v1beta1.MsgRenewDomainResponse";
  value: Uint8Array;
}
/** MsgRegisterDomain returns an empty response. */
export interface MsgRenewDomainResponseAmino {}
export interface MsgRenewDomainResponseAminoMsg {
  type: "/starnamed.x.starname.v1beta1.MsgRenewDomainResponse";
  value: MsgRenewDomainResponseAmino;
}
/** MsgRegisterDomain returns an empty response. */
export interface MsgRenewDomainResponseSDKType {}
/**
 * MsgReplaceAccountResources is the request model used to renew resources
 * associated with an account
 */
export interface MsgReplaceAccountResources {
  /** Domain is the domain of the account */
  domain: string;
  /** Name is the name of the account */
  name: string;
  /** Owner is the owner of the account */
  owner: string;
  /**
   * Payer is the address of the entity that pays the product and transaction
   * fees
   */
  payer: string;
  /** NewResources are the new resources */
  newResources: Resource[];
}
export interface MsgReplaceAccountResourcesProtoMsg {
  typeUrl: "/starnamed.x.starname.v1beta1.MsgReplaceAccountResources";
  value: Uint8Array;
}
/**
 * MsgReplaceAccountResources is the request model used to renew resources
 * associated with an account
 */
export interface MsgReplaceAccountResourcesAmino {
  /** Domain is the domain of the account */
  domain: string;
  /** Name is the name of the account */
  name: string;
  /** Owner is the owner of the account */
  owner: string;
  /**
   * Payer is the address of the entity that pays the product and transaction
   * fees
   */
  payer: string;
  /** NewResources are the new resources */
  new_resources: ResourceAmino[];
}
export interface MsgReplaceAccountResourcesAminoMsg {
  type: "/starnamed.x.starname.v1beta1.MsgReplaceAccountResources";
  value: MsgReplaceAccountResourcesAmino;
}
/**
 * MsgReplaceAccountResources is the request model used to renew resources
 * associated with an account
 */
export interface MsgReplaceAccountResourcesSDKType {
  domain: string;
  name: string;
  owner: string;
  payer: string;
  new_resources: ResourceSDKType[];
}
/** MsgReplaceAccountResourcesResponse */
export interface MsgReplaceAccountResourcesResponse {}
export interface MsgReplaceAccountResourcesResponseProtoMsg {
  typeUrl: "/starnamed.x.starname.v1beta1.MsgReplaceAccountResourcesResponse";
  value: Uint8Array;
}
/** MsgReplaceAccountResourcesResponse */
export interface MsgReplaceAccountResourcesResponseAmino {}
export interface MsgReplaceAccountResourcesResponseAminoMsg {
  type: "/starnamed.x.starname.v1beta1.MsgReplaceAccountResourcesResponse";
  value: MsgReplaceAccountResourcesResponseAmino;
}
/** MsgReplaceAccountResourcesResponse */
export interface MsgReplaceAccountResourcesResponseSDKType {}
/** MsgReplaceAccountMetadata is the function used to set accounts metadata */
export interface MsgReplaceAccountMetadata {
  /** Domain is the domain of the account */
  domain: string;
  /** Name is the name of the account */
  name: string;
  /** Owner is the owner of the account */
  owner: string;
  /**
   * Payer is the address of the entity that pays the product and transaction
   * fees
   */
  payer: string;
  /**
   * NewMetadataURI is the metadata URI of the account
   * we want to update or insert
   */
  newMetadataUri: string;
}
export interface MsgReplaceAccountMetadataProtoMsg {
  typeUrl: "/starnamed.x.starname.v1beta1.MsgReplaceAccountMetadata";
  value: Uint8Array;
}
/** MsgReplaceAccountMetadata is the function used to set accounts metadata */
export interface MsgReplaceAccountMetadataAmino {
  /** Domain is the domain of the account */
  domain: string;
  /** Name is the name of the account */
  name: string;
  /** Owner is the owner of the account */
  owner: string;
  /**
   * Payer is the address of the entity that pays the product and transaction
   * fees
   */
  payer: string;
  /**
   * NewMetadataURI is the metadata URI of the account
   * we want to update or insert
   */
  new_metadata_uri: string;
}
export interface MsgReplaceAccountMetadataAminoMsg {
  type: "/starnamed.x.starname.v1beta1.MsgReplaceAccountMetadata";
  value: MsgReplaceAccountMetadataAmino;
}
/** MsgReplaceAccountMetadata is the function used to set accounts metadata */
export interface MsgReplaceAccountMetadataSDKType {
  domain: string;
  name: string;
  owner: string;
  payer: string;
  new_metadata_uri: string;
}
/** MsgReplaceAccountMetadataResponse returns an empty response. */
export interface MsgReplaceAccountMetadataResponse {}
export interface MsgReplaceAccountMetadataResponseProtoMsg {
  typeUrl: "/starnamed.x.starname.v1beta1.MsgReplaceAccountMetadataResponse";
  value: Uint8Array;
}
/** MsgReplaceAccountMetadataResponse returns an empty response. */
export interface MsgReplaceAccountMetadataResponseAmino {}
export interface MsgReplaceAccountMetadataResponseAminoMsg {
  type: "/starnamed.x.starname.v1beta1.MsgReplaceAccountMetadataResponse";
  value: MsgReplaceAccountMetadataResponseAmino;
}
/** MsgReplaceAccountMetadataResponse returns an empty response. */
export interface MsgReplaceAccountMetadataResponseSDKType {}
/** MsgTransferAccount is the request model used to transfer accounts */
export interface MsgTransferAccount {
  /** Domain is the domain of the account */
  domain: string;
  /** Name is the name of the account */
  name: string;
  /** Owner is the owner of the account */
  owner: string;
  /**
   * Payer is the address of the entity that pays the product and transaction
   * fees
   */
  payer: string;
  /** NewOwner is the new owner of the account */
  newOwner: string;
  /** ToReset if true, removes all old data from account */
  reset: boolean;
}
export interface MsgTransferAccountProtoMsg {
  typeUrl: "/starnamed.x.starname.v1beta1.MsgTransferAccount";
  value: Uint8Array;
}
/** MsgTransferAccount is the request model used to transfer accounts */
export interface MsgTransferAccountAmino {
  /** Domain is the domain of the account */
  domain: string;
  /** Name is the name of the account */
  name: string;
  /** Owner is the owner of the account */
  owner: string;
  /**
   * Payer is the address of the entity that pays the product and transaction
   * fees
   */
  payer: string;
  /** NewOwner is the new owner of the account */
  new_owner: string;
  /** ToReset if true, removes all old data from account */
  reset: boolean;
}
export interface MsgTransferAccountAminoMsg {
  type: "/starnamed.x.starname.v1beta1.MsgTransferAccount";
  value: MsgTransferAccountAmino;
}
/** MsgTransferAccount is the request model used to transfer accounts */
export interface MsgTransferAccountSDKType {
  domain: string;
  name: string;
  owner: string;
  payer: string;
  new_owner: string;
  reset: boolean;
}
/** MsgTransferAccountResponse returns an empty response. */
export interface MsgTransferAccountResponse {}
export interface MsgTransferAccountResponseProtoMsg {
  typeUrl: "/starnamed.x.starname.v1beta1.MsgTransferAccountResponse";
  value: Uint8Array;
}
/** MsgTransferAccountResponse returns an empty response. */
export interface MsgTransferAccountResponseAmino {}
export interface MsgTransferAccountResponseAminoMsg {
  type: "/starnamed.x.starname.v1beta1.MsgTransferAccountResponse";
  value: MsgTransferAccountResponseAmino;
}
/** MsgTransferAccountResponse returns an empty response. */
export interface MsgTransferAccountResponseSDKType {}
/** MsgTransferDomain is the request model used to transfer a domain */
export interface MsgTransferDomain {
  /** Domain is the name of the domain */
  domain: string;
  /** Owner is the owner of the domain */
  owner: string;
  /**
   * Payer is the address of the entity that pays the product and transaction
   * fees
   */
  payer: string;
  /** NewAdmin is the  new owner of the domain */
  newAdmin: string;
  /** TransferFlag controls the operations that occurs on a domain's accounts */
  transferFlag: bigint;
}
export interface MsgTransferDomainProtoMsg {
  typeUrl: "/starnamed.x.starname.v1beta1.MsgTransferDomain";
  value: Uint8Array;
}
/** MsgTransferDomain is the request model used to transfer a domain */
export interface MsgTransferDomainAmino {
  /** Domain is the name of the domain */
  domain: string;
  /** Owner is the owner of the domain */
  owner: string;
  /**
   * Payer is the address of the entity that pays the product and transaction
   * fees
   */
  payer: string;
  /** NewAdmin is the  new owner of the domain */
  new_admin: string;
  /** TransferFlag controls the operations that occurs on a domain's accounts */
  transfer_flag: string;
}
export interface MsgTransferDomainAminoMsg {
  type: "/starnamed.x.starname.v1beta1.MsgTransferDomain";
  value: MsgTransferDomainAmino;
}
/** MsgTransferDomain is the request model used to transfer a domain */
export interface MsgTransferDomainSDKType {
  domain: string;
  owner: string;
  payer: string;
  new_admin: string;
  transfer_flag: bigint;
}
/** MsgTransferDomainResponse returns an empty response. */
export interface MsgTransferDomainResponse {}
export interface MsgTransferDomainResponseProtoMsg {
  typeUrl: "/starnamed.x.starname.v1beta1.MsgTransferDomainResponse";
  value: Uint8Array;
}
/** MsgTransferDomainResponse returns an empty response. */
export interface MsgTransferDomainResponseAmino {}
export interface MsgTransferDomainResponseAminoMsg {
  type: "/starnamed.x.starname.v1beta1.MsgTransferDomainResponse";
  value: MsgTransferDomainResponseAmino;
}
/** MsgTransferDomainResponse returns an empty response. */
export interface MsgTransferDomainResponseSDKType {}
function createBaseMsgAddAccountCertificate(): MsgAddAccountCertificate {
  return {
    domain: "",
    name: "",
    owner: "",
    payer: "",
    newCertificate: new Uint8Array()
  };
}
export const MsgAddAccountCertificate = {
  typeUrl: "/starnamed.x.starname.v1beta1.MsgAddAccountCertificate",
  encode(message: MsgAddAccountCertificate, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.domain !== "") {
      writer.uint32(10).string(message.domain);
    }
    if (message.name !== "") {
      writer.uint32(18).string(message.name);
    }
    if (message.owner !== "") {
      writer.uint32(26).string(message.owner);
    }
    if (message.payer !== "") {
      writer.uint32(34).string(message.payer);
    }
    if (message.newCertificate.length !== 0) {
      writer.uint32(42).bytes(message.newCertificate);
    }
    return writer;
  },
  fromJSON(object: any): MsgAddAccountCertificate {
    return {
      domain: isSet(object.domain) ? String(object.domain) : "",
      name: isSet(object.name) ? String(object.name) : "",
      owner: isSet(object.owner) ? String(object.owner) : "",
      payer: isSet(object.payer) ? String(object.payer) : "",
      newCertificate: isSet(object.newCertificate) ? bytesFromBase64(object.newCertificate) : new Uint8Array()
    };
  },
  fromPartial(object: Partial<MsgAddAccountCertificate>): MsgAddAccountCertificate {
    const message = createBaseMsgAddAccountCertificate();
    message.domain = object.domain ?? "";
    message.name = object.name ?? "";
    message.owner = object.owner ?? "";
    message.payer = object.payer ?? "";
    message.newCertificate = object.newCertificate ?? new Uint8Array();
    return message;
  },
  fromAmino(object: MsgAddAccountCertificateAmino): MsgAddAccountCertificate {
    return {
      domain: object.domain,
      name: object.name,
      owner: object.owner,
      payer: object.payer,
      newCertificate: object.new_certificate
    };
  },
  toAmino(message: MsgAddAccountCertificate): MsgAddAccountCertificateAmino {
    const obj: any = {};
    obj.domain = message.domain;
    obj.name = message.name;
    obj.owner = message.owner;
    obj.payer = message.payer;
    obj.new_certificate = message.newCertificate;
    return obj;
  },
  fromAminoMsg(object: MsgAddAccountCertificateAminoMsg): MsgAddAccountCertificate {
    return MsgAddAccountCertificate.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgAddAccountCertificateProtoMsg): MsgAddAccountCertificate {
    return MsgAddAccountCertificate.decode(message.value);
  },
  toProto(message: MsgAddAccountCertificate): Uint8Array {
    return MsgAddAccountCertificate.encode(message).finish();
  },
  toProtoMsg(message: MsgAddAccountCertificate): MsgAddAccountCertificateProtoMsg {
    return {
      typeUrl: "/starnamed.x.starname.v1beta1.MsgAddAccountCertificate",
      value: MsgAddAccountCertificate.encode(message).finish()
    };
  }
};
function createBaseMsgAddAccountCertificateResponse(): MsgAddAccountCertificateResponse {
  return {};
}
export const MsgAddAccountCertificateResponse = {
  typeUrl: "/starnamed.x.starname.v1beta1.MsgAddAccountCertificateResponse",
  encode(_: MsgAddAccountCertificateResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  fromJSON(_: any): MsgAddAccountCertificateResponse {
    return {};
  },
  fromPartial(_: Partial<MsgAddAccountCertificateResponse>): MsgAddAccountCertificateResponse {
    const message = createBaseMsgAddAccountCertificateResponse();
    return message;
  },
  fromAmino(_: MsgAddAccountCertificateResponseAmino): MsgAddAccountCertificateResponse {
    return {};
  },
  toAmino(_: MsgAddAccountCertificateResponse): MsgAddAccountCertificateResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgAddAccountCertificateResponseAminoMsg): MsgAddAccountCertificateResponse {
    return MsgAddAccountCertificateResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgAddAccountCertificateResponseProtoMsg): MsgAddAccountCertificateResponse {
    return MsgAddAccountCertificateResponse.decode(message.value);
  },
  toProto(message: MsgAddAccountCertificateResponse): Uint8Array {
    return MsgAddAccountCertificateResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgAddAccountCertificateResponse): MsgAddAccountCertificateResponseProtoMsg {
    return {
      typeUrl: "/starnamed.x.starname.v1beta1.MsgAddAccountCertificateResponse",
      value: MsgAddAccountCertificateResponse.encode(message).finish()
    };
  }
};
function createBaseMsgDeleteAccountCertificate(): MsgDeleteAccountCertificate {
  return {
    domain: "",
    name: "",
    owner: "",
    payer: "",
    deleteCertificate: new Uint8Array()
  };
}
export const MsgDeleteAccountCertificate = {
  typeUrl: "/starnamed.x.starname.v1beta1.MsgDeleteAccountCertificate",
  encode(message: MsgDeleteAccountCertificate, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.domain !== "") {
      writer.uint32(10).string(message.domain);
    }
    if (message.name !== "") {
      writer.uint32(18).string(message.name);
    }
    if (message.owner !== "") {
      writer.uint32(26).string(message.owner);
    }
    if (message.payer !== "") {
      writer.uint32(34).string(message.payer);
    }
    if (message.deleteCertificate.length !== 0) {
      writer.uint32(42).bytes(message.deleteCertificate);
    }
    return writer;
  },
  fromJSON(object: any): MsgDeleteAccountCertificate {
    return {
      domain: isSet(object.domain) ? String(object.domain) : "",
      name: isSet(object.name) ? String(object.name) : "",
      owner: isSet(object.owner) ? String(object.owner) : "",
      payer: isSet(object.payer) ? String(object.payer) : "",
      deleteCertificate: isSet(object.deleteCertificate) ? bytesFromBase64(object.deleteCertificate) : new Uint8Array()
    };
  },
  fromPartial(object: Partial<MsgDeleteAccountCertificate>): MsgDeleteAccountCertificate {
    const message = createBaseMsgDeleteAccountCertificate();
    message.domain = object.domain ?? "";
    message.name = object.name ?? "";
    message.owner = object.owner ?? "";
    message.payer = object.payer ?? "";
    message.deleteCertificate = object.deleteCertificate ?? new Uint8Array();
    return message;
  },
  fromAmino(object: MsgDeleteAccountCertificateAmino): MsgDeleteAccountCertificate {
    return {
      domain: object.domain,
      name: object.name,
      owner: object.owner,
      payer: object.payer,
      deleteCertificate: object.delete_certificate
    };
  },
  toAmino(message: MsgDeleteAccountCertificate): MsgDeleteAccountCertificateAmino {
    const obj: any = {};
    obj.domain = message.domain;
    obj.name = message.name;
    obj.owner = message.owner;
    obj.payer = message.payer;
    obj.delete_certificate = message.deleteCertificate;
    return obj;
  },
  fromAminoMsg(object: MsgDeleteAccountCertificateAminoMsg): MsgDeleteAccountCertificate {
    return MsgDeleteAccountCertificate.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgDeleteAccountCertificateProtoMsg): MsgDeleteAccountCertificate {
    return MsgDeleteAccountCertificate.decode(message.value);
  },
  toProto(message: MsgDeleteAccountCertificate): Uint8Array {
    return MsgDeleteAccountCertificate.encode(message).finish();
  },
  toProtoMsg(message: MsgDeleteAccountCertificate): MsgDeleteAccountCertificateProtoMsg {
    return {
      typeUrl: "/starnamed.x.starname.v1beta1.MsgDeleteAccountCertificate",
      value: MsgDeleteAccountCertificate.encode(message).finish()
    };
  }
};
function createBaseMsgDeleteAccountCertificateResponse(): MsgDeleteAccountCertificateResponse {
  return {};
}
export const MsgDeleteAccountCertificateResponse = {
  typeUrl: "/starnamed.x.starname.v1beta1.MsgDeleteAccountCertificateResponse",
  encode(_: MsgDeleteAccountCertificateResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  fromJSON(_: any): MsgDeleteAccountCertificateResponse {
    return {};
  },
  fromPartial(_: Partial<MsgDeleteAccountCertificateResponse>): MsgDeleteAccountCertificateResponse {
    const message = createBaseMsgDeleteAccountCertificateResponse();
    return message;
  },
  fromAmino(_: MsgDeleteAccountCertificateResponseAmino): MsgDeleteAccountCertificateResponse {
    return {};
  },
  toAmino(_: MsgDeleteAccountCertificateResponse): MsgDeleteAccountCertificateResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgDeleteAccountCertificateResponseAminoMsg): MsgDeleteAccountCertificateResponse {
    return MsgDeleteAccountCertificateResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgDeleteAccountCertificateResponseProtoMsg): MsgDeleteAccountCertificateResponse {
    return MsgDeleteAccountCertificateResponse.decode(message.value);
  },
  toProto(message: MsgDeleteAccountCertificateResponse): Uint8Array {
    return MsgDeleteAccountCertificateResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgDeleteAccountCertificateResponse): MsgDeleteAccountCertificateResponseProtoMsg {
    return {
      typeUrl: "/starnamed.x.starname.v1beta1.MsgDeleteAccountCertificateResponse",
      value: MsgDeleteAccountCertificateResponse.encode(message).finish()
    };
  }
};
function createBaseMsgDeleteAccount(): MsgDeleteAccount {
  return {
    domain: "",
    name: "",
    owner: "",
    payer: ""
  };
}
export const MsgDeleteAccount = {
  typeUrl: "/starnamed.x.starname.v1beta1.MsgDeleteAccount",
  encode(message: MsgDeleteAccount, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.domain !== "") {
      writer.uint32(10).string(message.domain);
    }
    if (message.name !== "") {
      writer.uint32(18).string(message.name);
    }
    if (message.owner !== "") {
      writer.uint32(26).string(message.owner);
    }
    if (message.payer !== "") {
      writer.uint32(34).string(message.payer);
    }
    return writer;
  },
  fromJSON(object: any): MsgDeleteAccount {
    return {
      domain: isSet(object.domain) ? String(object.domain) : "",
      name: isSet(object.name) ? String(object.name) : "",
      owner: isSet(object.owner) ? String(object.owner) : "",
      payer: isSet(object.payer) ? String(object.payer) : ""
    };
  },
  fromPartial(object: Partial<MsgDeleteAccount>): MsgDeleteAccount {
    const message = createBaseMsgDeleteAccount();
    message.domain = object.domain ?? "";
    message.name = object.name ?? "";
    message.owner = object.owner ?? "";
    message.payer = object.payer ?? "";
    return message;
  },
  fromAmino(object: MsgDeleteAccountAmino): MsgDeleteAccount {
    return {
      domain: object.domain,
      name: object.name,
      owner: object.owner,
      payer: object.payer
    };
  },
  toAmino(message: MsgDeleteAccount): MsgDeleteAccountAmino {
    const obj: any = {};
    obj.domain = message.domain;
    obj.name = message.name;
    obj.owner = message.owner;
    obj.payer = message.payer;
    return obj;
  },
  fromAminoMsg(object: MsgDeleteAccountAminoMsg): MsgDeleteAccount {
    return MsgDeleteAccount.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgDeleteAccountProtoMsg): MsgDeleteAccount {
    return MsgDeleteAccount.decode(message.value);
  },
  toProto(message: MsgDeleteAccount): Uint8Array {
    return MsgDeleteAccount.encode(message).finish();
  },
  toProtoMsg(message: MsgDeleteAccount): MsgDeleteAccountProtoMsg {
    return {
      typeUrl: "/starnamed.x.starname.v1beta1.MsgDeleteAccount",
      value: MsgDeleteAccount.encode(message).finish()
    };
  }
};
function createBaseMsgDeleteAccountResponse(): MsgDeleteAccountResponse {
  return {};
}
export const MsgDeleteAccountResponse = {
  typeUrl: "/starnamed.x.starname.v1beta1.MsgDeleteAccountResponse",
  encode(_: MsgDeleteAccountResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  fromJSON(_: any): MsgDeleteAccountResponse {
    return {};
  },
  fromPartial(_: Partial<MsgDeleteAccountResponse>): MsgDeleteAccountResponse {
    const message = createBaseMsgDeleteAccountResponse();
    return message;
  },
  fromAmino(_: MsgDeleteAccountResponseAmino): MsgDeleteAccountResponse {
    return {};
  },
  toAmino(_: MsgDeleteAccountResponse): MsgDeleteAccountResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgDeleteAccountResponseAminoMsg): MsgDeleteAccountResponse {
    return MsgDeleteAccountResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgDeleteAccountResponseProtoMsg): MsgDeleteAccountResponse {
    return MsgDeleteAccountResponse.decode(message.value);
  },
  toProto(message: MsgDeleteAccountResponse): Uint8Array {
    return MsgDeleteAccountResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgDeleteAccountResponse): MsgDeleteAccountResponseProtoMsg {
    return {
      typeUrl: "/starnamed.x.starname.v1beta1.MsgDeleteAccountResponse",
      value: MsgDeleteAccountResponse.encode(message).finish()
    };
  }
};
function createBaseMsgDeleteDomain(): MsgDeleteDomain {
  return {
    domain: "",
    owner: "",
    payer: ""
  };
}
export const MsgDeleteDomain = {
  typeUrl: "/starnamed.x.starname.v1beta1.MsgDeleteDomain",
  encode(message: MsgDeleteDomain, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.domain !== "") {
      writer.uint32(10).string(message.domain);
    }
    if (message.owner !== "") {
      writer.uint32(18).string(message.owner);
    }
    if (message.payer !== "") {
      writer.uint32(26).string(message.payer);
    }
    return writer;
  },
  fromJSON(object: any): MsgDeleteDomain {
    return {
      domain: isSet(object.domain) ? String(object.domain) : "",
      owner: isSet(object.owner) ? String(object.owner) : "",
      payer: isSet(object.payer) ? String(object.payer) : ""
    };
  },
  fromPartial(object: Partial<MsgDeleteDomain>): MsgDeleteDomain {
    const message = createBaseMsgDeleteDomain();
    message.domain = object.domain ?? "";
    message.owner = object.owner ?? "";
    message.payer = object.payer ?? "";
    return message;
  },
  fromAmino(object: MsgDeleteDomainAmino): MsgDeleteDomain {
    return {
      domain: object.domain,
      owner: object.owner,
      payer: object.payer
    };
  },
  toAmino(message: MsgDeleteDomain): MsgDeleteDomainAmino {
    const obj: any = {};
    obj.domain = message.domain;
    obj.owner = message.owner;
    obj.payer = message.payer;
    return obj;
  },
  fromAminoMsg(object: MsgDeleteDomainAminoMsg): MsgDeleteDomain {
    return MsgDeleteDomain.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgDeleteDomainProtoMsg): MsgDeleteDomain {
    return MsgDeleteDomain.decode(message.value);
  },
  toProto(message: MsgDeleteDomain): Uint8Array {
    return MsgDeleteDomain.encode(message).finish();
  },
  toProtoMsg(message: MsgDeleteDomain): MsgDeleteDomainProtoMsg {
    return {
      typeUrl: "/starnamed.x.starname.v1beta1.MsgDeleteDomain",
      value: MsgDeleteDomain.encode(message).finish()
    };
  }
};
function createBaseMsgDeleteDomainResponse(): MsgDeleteDomainResponse {
  return {};
}
export const MsgDeleteDomainResponse = {
  typeUrl: "/starnamed.x.starname.v1beta1.MsgDeleteDomainResponse",
  encode(_: MsgDeleteDomainResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  fromJSON(_: any): MsgDeleteDomainResponse {
    return {};
  },
  fromPartial(_: Partial<MsgDeleteDomainResponse>): MsgDeleteDomainResponse {
    const message = createBaseMsgDeleteDomainResponse();
    return message;
  },
  fromAmino(_: MsgDeleteDomainResponseAmino): MsgDeleteDomainResponse {
    return {};
  },
  toAmino(_: MsgDeleteDomainResponse): MsgDeleteDomainResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgDeleteDomainResponseAminoMsg): MsgDeleteDomainResponse {
    return MsgDeleteDomainResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgDeleteDomainResponseProtoMsg): MsgDeleteDomainResponse {
    return MsgDeleteDomainResponse.decode(message.value);
  },
  toProto(message: MsgDeleteDomainResponse): Uint8Array {
    return MsgDeleteDomainResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgDeleteDomainResponse): MsgDeleteDomainResponseProtoMsg {
    return {
      typeUrl: "/starnamed.x.starname.v1beta1.MsgDeleteDomainResponse",
      value: MsgDeleteDomainResponse.encode(message).finish()
    };
  }
};
function createBaseMsgRegisterAccount(): MsgRegisterAccount {
  return {
    domain: "",
    name: "",
    owner: "",
    payer: "",
    broker: "",
    registerer: "",
    resources: []
  };
}
export const MsgRegisterAccount = {
  typeUrl: "/starnamed.x.starname.v1beta1.MsgRegisterAccount",
  encode(message: MsgRegisterAccount, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.domain !== "") {
      writer.uint32(10).string(message.domain);
    }
    if (message.name !== "") {
      writer.uint32(18).string(message.name);
    }
    if (message.owner !== "") {
      writer.uint32(26).string(message.owner);
    }
    if (message.payer !== "") {
      writer.uint32(34).string(message.payer);
    }
    if (message.broker !== "") {
      writer.uint32(42).string(message.broker);
    }
    if (message.registerer !== "") {
      writer.uint32(50).string(message.registerer);
    }
    for (const v of message.resources) {
      Resource.encode(v!, writer.uint32(58).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): MsgRegisterAccount {
    return {
      domain: isSet(object.domain) ? String(object.domain) : "",
      name: isSet(object.name) ? String(object.name) : "",
      owner: isSet(object.owner) ? String(object.owner) : "",
      payer: isSet(object.payer) ? String(object.payer) : "",
      broker: isSet(object.broker) ? String(object.broker) : "",
      registerer: isSet(object.registerer) ? String(object.registerer) : "",
      resources: Array.isArray(object?.resources) ? object.resources.map((e: any) => Resource.fromJSON(e)) : []
    };
  },
  fromPartial(object: Partial<MsgRegisterAccount>): MsgRegisterAccount {
    const message = createBaseMsgRegisterAccount();
    message.domain = object.domain ?? "";
    message.name = object.name ?? "";
    message.owner = object.owner ?? "";
    message.payer = object.payer ?? "";
    message.broker = object.broker ?? "";
    message.registerer = object.registerer ?? "";
    message.resources = object.resources?.map(e => Resource.fromPartial(e)) || [];
    return message;
  },
  fromAmino(object: MsgRegisterAccountAmino): MsgRegisterAccount {
    return {
      domain: object.domain,
      name: object.name,
      owner: object.owner,
      payer: object.payer,
      broker: object.broker,
      registerer: object.registerer,
      resources: Array.isArray(object?.resources) ? object.resources.map((e: any) => Resource.fromAmino(e)) : []
    };
  },
  toAmino(message: MsgRegisterAccount): MsgRegisterAccountAmino {
    const obj: any = {};
    obj.domain = message.domain;
    obj.name = message.name;
    obj.owner = message.owner;
    obj.payer = message.payer;
    obj.broker = message.broker;
    obj.registerer = message.registerer;
    if (message.resources) {
      obj.resources = message.resources.map(e => e ? Resource.toAmino(e) : undefined);
    } else {
      obj.resources = [];
    }
    return obj;
  },
  fromAminoMsg(object: MsgRegisterAccountAminoMsg): MsgRegisterAccount {
    return MsgRegisterAccount.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgRegisterAccountProtoMsg): MsgRegisterAccount {
    return MsgRegisterAccount.decode(message.value);
  },
  toProto(message: MsgRegisterAccount): Uint8Array {
    return MsgRegisterAccount.encode(message).finish();
  },
  toProtoMsg(message: MsgRegisterAccount): MsgRegisterAccountProtoMsg {
    return {
      typeUrl: "/starnamed.x.starname.v1beta1.MsgRegisterAccount",
      value: MsgRegisterAccount.encode(message).finish()
    };
  }
};
function createBaseMsgRegisterAccountResponse(): MsgRegisterAccountResponse {
  return {};
}
export const MsgRegisterAccountResponse = {
  typeUrl: "/starnamed.x.starname.v1beta1.MsgRegisterAccountResponse",
  encode(_: MsgRegisterAccountResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  fromJSON(_: any): MsgRegisterAccountResponse {
    return {};
  },
  fromPartial(_: Partial<MsgRegisterAccountResponse>): MsgRegisterAccountResponse {
    const message = createBaseMsgRegisterAccountResponse();
    return message;
  },
  fromAmino(_: MsgRegisterAccountResponseAmino): MsgRegisterAccountResponse {
    return {};
  },
  toAmino(_: MsgRegisterAccountResponse): MsgRegisterAccountResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgRegisterAccountResponseAminoMsg): MsgRegisterAccountResponse {
    return MsgRegisterAccountResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgRegisterAccountResponseProtoMsg): MsgRegisterAccountResponse {
    return MsgRegisterAccountResponse.decode(message.value);
  },
  toProto(message: MsgRegisterAccountResponse): Uint8Array {
    return MsgRegisterAccountResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgRegisterAccountResponse): MsgRegisterAccountResponseProtoMsg {
    return {
      typeUrl: "/starnamed.x.starname.v1beta1.MsgRegisterAccountResponse",
      value: MsgRegisterAccountResponse.encode(message).finish()
    };
  }
};
function createBaseMsgRegisterDomain(): MsgRegisterDomain {
  return {
    name: "",
    admin: "",
    payer: "",
    broker: "",
    domainType: ""
  };
}
export const MsgRegisterDomain = {
  typeUrl: "/starnamed.x.starname.v1beta1.MsgRegisterDomain",
  encode(message: MsgRegisterDomain, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.name !== "") {
      writer.uint32(10).string(message.name);
    }
    if (message.admin !== "") {
      writer.uint32(18).string(message.admin);
    }
    if (message.payer !== "") {
      writer.uint32(26).string(message.payer);
    }
    if (message.broker !== "") {
      writer.uint32(34).string(message.broker);
    }
    if (message.domainType !== "") {
      writer.uint32(42).string(message.domainType);
    }
    return writer;
  },
  fromJSON(object: any): MsgRegisterDomain {
    return {
      name: isSet(object.name) ? String(object.name) : "",
      admin: isSet(object.admin) ? String(object.admin) : "",
      payer: isSet(object.payer) ? String(object.payer) : "",
      broker: isSet(object.broker) ? String(object.broker) : "",
      domainType: isSet(object.domainType) ? String(object.domainType) : ""
    };
  },
  fromPartial(object: Partial<MsgRegisterDomain>): MsgRegisterDomain {
    const message = createBaseMsgRegisterDomain();
    message.name = object.name ?? "";
    message.admin = object.admin ?? "";
    message.payer = object.payer ?? "";
    message.broker = object.broker ?? "";
    message.domainType = object.domainType ?? "";
    return message;
  },
  fromAmino(object: MsgRegisterDomainAmino): MsgRegisterDomain {
    return {
      name: object.name,
      admin: object.admin,
      payer: object.payer,
      broker: object.broker,
      domainType: object.domain_type
    };
  },
  toAmino(message: MsgRegisterDomain): MsgRegisterDomainAmino {
    const obj: any = {};
    obj.name = message.name;
    obj.admin = message.admin;
    obj.payer = message.payer;
    obj.broker = message.broker;
    obj.domain_type = message.domainType;
    return obj;
  },
  fromAminoMsg(object: MsgRegisterDomainAminoMsg): MsgRegisterDomain {
    return MsgRegisterDomain.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgRegisterDomainProtoMsg): MsgRegisterDomain {
    return MsgRegisterDomain.decode(message.value);
  },
  toProto(message: MsgRegisterDomain): Uint8Array {
    return MsgRegisterDomain.encode(message).finish();
  },
  toProtoMsg(message: MsgRegisterDomain): MsgRegisterDomainProtoMsg {
    return {
      typeUrl: "/starnamed.x.starname.v1beta1.MsgRegisterDomain",
      value: MsgRegisterDomain.encode(message).finish()
    };
  }
};
function createBaseMsgRegisterDomainResponse(): MsgRegisterDomainResponse {
  return {};
}
export const MsgRegisterDomainResponse = {
  typeUrl: "/starnamed.x.starname.v1beta1.MsgRegisterDomainResponse",
  encode(_: MsgRegisterDomainResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  fromJSON(_: any): MsgRegisterDomainResponse {
    return {};
  },
  fromPartial(_: Partial<MsgRegisterDomainResponse>): MsgRegisterDomainResponse {
    const message = createBaseMsgRegisterDomainResponse();
    return message;
  },
  fromAmino(_: MsgRegisterDomainResponseAmino): MsgRegisterDomainResponse {
    return {};
  },
  toAmino(_: MsgRegisterDomainResponse): MsgRegisterDomainResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgRegisterDomainResponseAminoMsg): MsgRegisterDomainResponse {
    return MsgRegisterDomainResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgRegisterDomainResponseProtoMsg): MsgRegisterDomainResponse {
    return MsgRegisterDomainResponse.decode(message.value);
  },
  toProto(message: MsgRegisterDomainResponse): Uint8Array {
    return MsgRegisterDomainResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgRegisterDomainResponse): MsgRegisterDomainResponseProtoMsg {
    return {
      typeUrl: "/starnamed.x.starname.v1beta1.MsgRegisterDomainResponse",
      value: MsgRegisterDomainResponse.encode(message).finish()
    };
  }
};
function createBaseMsgRenewAccount(): MsgRenewAccount {
  return {
    domain: "",
    name: "",
    signer: "",
    payer: ""
  };
}
export const MsgRenewAccount = {
  typeUrl: "/starnamed.x.starname.v1beta1.MsgRenewAccount",
  encode(message: MsgRenewAccount, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.domain !== "") {
      writer.uint32(10).string(message.domain);
    }
    if (message.name !== "") {
      writer.uint32(18).string(message.name);
    }
    if (message.signer !== "") {
      writer.uint32(26).string(message.signer);
    }
    if (message.payer !== "") {
      writer.uint32(34).string(message.payer);
    }
    return writer;
  },
  fromJSON(object: any): MsgRenewAccount {
    return {
      domain: isSet(object.domain) ? String(object.domain) : "",
      name: isSet(object.name) ? String(object.name) : "",
      signer: isSet(object.signer) ? String(object.signer) : "",
      payer: isSet(object.payer) ? String(object.payer) : ""
    };
  },
  fromPartial(object: Partial<MsgRenewAccount>): MsgRenewAccount {
    const message = createBaseMsgRenewAccount();
    message.domain = object.domain ?? "";
    message.name = object.name ?? "";
    message.signer = object.signer ?? "";
    message.payer = object.payer ?? "";
    return message;
  },
  fromAmino(object: MsgRenewAccountAmino): MsgRenewAccount {
    return {
      domain: object.domain,
      name: object.name,
      signer: object.signer,
      payer: object.payer
    };
  },
  toAmino(message: MsgRenewAccount): MsgRenewAccountAmino {
    const obj: any = {};
    obj.domain = message.domain;
    obj.name = message.name;
    obj.signer = message.signer;
    obj.payer = message.payer;
    return obj;
  },
  fromAminoMsg(object: MsgRenewAccountAminoMsg): MsgRenewAccount {
    return MsgRenewAccount.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgRenewAccountProtoMsg): MsgRenewAccount {
    return MsgRenewAccount.decode(message.value);
  },
  toProto(message: MsgRenewAccount): Uint8Array {
    return MsgRenewAccount.encode(message).finish();
  },
  toProtoMsg(message: MsgRenewAccount): MsgRenewAccountProtoMsg {
    return {
      typeUrl: "/starnamed.x.starname.v1beta1.MsgRenewAccount",
      value: MsgRenewAccount.encode(message).finish()
    };
  }
};
function createBaseMsgRenewAccountResponse(): MsgRenewAccountResponse {
  return {};
}
export const MsgRenewAccountResponse = {
  typeUrl: "/starnamed.x.starname.v1beta1.MsgRenewAccountResponse",
  encode(_: MsgRenewAccountResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  fromJSON(_: any): MsgRenewAccountResponse {
    return {};
  },
  fromPartial(_: Partial<MsgRenewAccountResponse>): MsgRenewAccountResponse {
    const message = createBaseMsgRenewAccountResponse();
    return message;
  },
  fromAmino(_: MsgRenewAccountResponseAmino): MsgRenewAccountResponse {
    return {};
  },
  toAmino(_: MsgRenewAccountResponse): MsgRenewAccountResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgRenewAccountResponseAminoMsg): MsgRenewAccountResponse {
    return MsgRenewAccountResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgRenewAccountResponseProtoMsg): MsgRenewAccountResponse {
    return MsgRenewAccountResponse.decode(message.value);
  },
  toProto(message: MsgRenewAccountResponse): Uint8Array {
    return MsgRenewAccountResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgRenewAccountResponse): MsgRenewAccountResponseProtoMsg {
    return {
      typeUrl: "/starnamed.x.starname.v1beta1.MsgRenewAccountResponse",
      value: MsgRenewAccountResponse.encode(message).finish()
    };
  }
};
function createBaseMsgRenewDomain(): MsgRenewDomain {
  return {
    domain: "",
    signer: "",
    payer: ""
  };
}
export const MsgRenewDomain = {
  typeUrl: "/starnamed.x.starname.v1beta1.MsgRenewDomain",
  encode(message: MsgRenewDomain, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.domain !== "") {
      writer.uint32(10).string(message.domain);
    }
    if (message.signer !== "") {
      writer.uint32(18).string(message.signer);
    }
    if (message.payer !== "") {
      writer.uint32(26).string(message.payer);
    }
    return writer;
  },
  fromJSON(object: any): MsgRenewDomain {
    return {
      domain: isSet(object.domain) ? String(object.domain) : "",
      signer: isSet(object.signer) ? String(object.signer) : "",
      payer: isSet(object.payer) ? String(object.payer) : ""
    };
  },
  fromPartial(object: Partial<MsgRenewDomain>): MsgRenewDomain {
    const message = createBaseMsgRenewDomain();
    message.domain = object.domain ?? "";
    message.signer = object.signer ?? "";
    message.payer = object.payer ?? "";
    return message;
  },
  fromAmino(object: MsgRenewDomainAmino): MsgRenewDomain {
    return {
      domain: object.domain,
      signer: object.signer,
      payer: object.payer
    };
  },
  toAmino(message: MsgRenewDomain): MsgRenewDomainAmino {
    const obj: any = {};
    obj.domain = message.domain;
    obj.signer = message.signer;
    obj.payer = message.payer;
    return obj;
  },
  fromAminoMsg(object: MsgRenewDomainAminoMsg): MsgRenewDomain {
    return MsgRenewDomain.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgRenewDomainProtoMsg): MsgRenewDomain {
    return MsgRenewDomain.decode(message.value);
  },
  toProto(message: MsgRenewDomain): Uint8Array {
    return MsgRenewDomain.encode(message).finish();
  },
  toProtoMsg(message: MsgRenewDomain): MsgRenewDomainProtoMsg {
    return {
      typeUrl: "/starnamed.x.starname.v1beta1.MsgRenewDomain",
      value: MsgRenewDomain.encode(message).finish()
    };
  }
};
function createBaseMsgRenewDomainResponse(): MsgRenewDomainResponse {
  return {};
}
export const MsgRenewDomainResponse = {
  typeUrl: "/starnamed.x.starname.v1beta1.MsgRenewDomainResponse",
  encode(_: MsgRenewDomainResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  fromJSON(_: any): MsgRenewDomainResponse {
    return {};
  },
  fromPartial(_: Partial<MsgRenewDomainResponse>): MsgRenewDomainResponse {
    const message = createBaseMsgRenewDomainResponse();
    return message;
  },
  fromAmino(_: MsgRenewDomainResponseAmino): MsgRenewDomainResponse {
    return {};
  },
  toAmino(_: MsgRenewDomainResponse): MsgRenewDomainResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgRenewDomainResponseAminoMsg): MsgRenewDomainResponse {
    return MsgRenewDomainResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgRenewDomainResponseProtoMsg): MsgRenewDomainResponse {
    return MsgRenewDomainResponse.decode(message.value);
  },
  toProto(message: MsgRenewDomainResponse): Uint8Array {
    return MsgRenewDomainResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgRenewDomainResponse): MsgRenewDomainResponseProtoMsg {
    return {
      typeUrl: "/starnamed.x.starname.v1beta1.MsgRenewDomainResponse",
      value: MsgRenewDomainResponse.encode(message).finish()
    };
  }
};
function createBaseMsgReplaceAccountResources(): MsgReplaceAccountResources {
  return {
    domain: "",
    name: "",
    owner: "",
    payer: "",
    newResources: []
  };
}
export const MsgReplaceAccountResources = {
  typeUrl: "/starnamed.x.starname.v1beta1.MsgReplaceAccountResources",
  encode(message: MsgReplaceAccountResources, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.domain !== "") {
      writer.uint32(10).string(message.domain);
    }
    if (message.name !== "") {
      writer.uint32(18).string(message.name);
    }
    if (message.owner !== "") {
      writer.uint32(26).string(message.owner);
    }
    if (message.payer !== "") {
      writer.uint32(34).string(message.payer);
    }
    for (const v of message.newResources) {
      Resource.encode(v!, writer.uint32(42).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): MsgReplaceAccountResources {
    return {
      domain: isSet(object.domain) ? String(object.domain) : "",
      name: isSet(object.name) ? String(object.name) : "",
      owner: isSet(object.owner) ? String(object.owner) : "",
      payer: isSet(object.payer) ? String(object.payer) : "",
      newResources: Array.isArray(object?.newResources) ? object.newResources.map((e: any) => Resource.fromJSON(e)) : []
    };
  },
  fromPartial(object: Partial<MsgReplaceAccountResources>): MsgReplaceAccountResources {
    const message = createBaseMsgReplaceAccountResources();
    message.domain = object.domain ?? "";
    message.name = object.name ?? "";
    message.owner = object.owner ?? "";
    message.payer = object.payer ?? "";
    message.newResources = object.newResources?.map(e => Resource.fromPartial(e)) || [];
    return message;
  },
  fromAmino(object: MsgReplaceAccountResourcesAmino): MsgReplaceAccountResources {
    return {
      domain: object.domain,
      name: object.name,
      owner: object.owner,
      payer: object.payer,
      newResources: Array.isArray(object?.new_resources) ? object.new_resources.map((e: any) => Resource.fromAmino(e)) : []
    };
  },
  toAmino(message: MsgReplaceAccountResources): MsgReplaceAccountResourcesAmino {
    const obj: any = {};
    obj.domain = message.domain;
    obj.name = message.name;
    obj.owner = message.owner;
    obj.payer = message.payer;
    if (message.newResources) {
      obj.new_resources = message.newResources.map(e => e ? Resource.toAmino(e) : undefined);
    } else {
      obj.new_resources = [];
    }
    return obj;
  },
  fromAminoMsg(object: MsgReplaceAccountResourcesAminoMsg): MsgReplaceAccountResources {
    return MsgReplaceAccountResources.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgReplaceAccountResourcesProtoMsg): MsgReplaceAccountResources {
    return MsgReplaceAccountResources.decode(message.value);
  },
  toProto(message: MsgReplaceAccountResources): Uint8Array {
    return MsgReplaceAccountResources.encode(message).finish();
  },
  toProtoMsg(message: MsgReplaceAccountResources): MsgReplaceAccountResourcesProtoMsg {
    return {
      typeUrl: "/starnamed.x.starname.v1beta1.MsgReplaceAccountResources",
      value: MsgReplaceAccountResources.encode(message).finish()
    };
  }
};
function createBaseMsgReplaceAccountResourcesResponse(): MsgReplaceAccountResourcesResponse {
  return {};
}
export const MsgReplaceAccountResourcesResponse = {
  typeUrl: "/starnamed.x.starname.v1beta1.MsgReplaceAccountResourcesResponse",
  encode(_: MsgReplaceAccountResourcesResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  fromJSON(_: any): MsgReplaceAccountResourcesResponse {
    return {};
  },
  fromPartial(_: Partial<MsgReplaceAccountResourcesResponse>): MsgReplaceAccountResourcesResponse {
    const message = createBaseMsgReplaceAccountResourcesResponse();
    return message;
  },
  fromAmino(_: MsgReplaceAccountResourcesResponseAmino): MsgReplaceAccountResourcesResponse {
    return {};
  },
  toAmino(_: MsgReplaceAccountResourcesResponse): MsgReplaceAccountResourcesResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgReplaceAccountResourcesResponseAminoMsg): MsgReplaceAccountResourcesResponse {
    return MsgReplaceAccountResourcesResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgReplaceAccountResourcesResponseProtoMsg): MsgReplaceAccountResourcesResponse {
    return MsgReplaceAccountResourcesResponse.decode(message.value);
  },
  toProto(message: MsgReplaceAccountResourcesResponse): Uint8Array {
    return MsgReplaceAccountResourcesResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgReplaceAccountResourcesResponse): MsgReplaceAccountResourcesResponseProtoMsg {
    return {
      typeUrl: "/starnamed.x.starname.v1beta1.MsgReplaceAccountResourcesResponse",
      value: MsgReplaceAccountResourcesResponse.encode(message).finish()
    };
  }
};
function createBaseMsgReplaceAccountMetadata(): MsgReplaceAccountMetadata {
  return {
    domain: "",
    name: "",
    owner: "",
    payer: "",
    newMetadataUri: ""
  };
}
export const MsgReplaceAccountMetadata = {
  typeUrl: "/starnamed.x.starname.v1beta1.MsgReplaceAccountMetadata",
  encode(message: MsgReplaceAccountMetadata, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.domain !== "") {
      writer.uint32(10).string(message.domain);
    }
    if (message.name !== "") {
      writer.uint32(18).string(message.name);
    }
    if (message.owner !== "") {
      writer.uint32(26).string(message.owner);
    }
    if (message.payer !== "") {
      writer.uint32(34).string(message.payer);
    }
    if (message.newMetadataUri !== "") {
      writer.uint32(42).string(message.newMetadataUri);
    }
    return writer;
  },
  fromJSON(object: any): MsgReplaceAccountMetadata {
    return {
      domain: isSet(object.domain) ? String(object.domain) : "",
      name: isSet(object.name) ? String(object.name) : "",
      owner: isSet(object.owner) ? String(object.owner) : "",
      payer: isSet(object.payer) ? String(object.payer) : "",
      newMetadataUri: isSet(object.newMetadataUri) ? String(object.newMetadataUri) : ""
    };
  },
  fromPartial(object: Partial<MsgReplaceAccountMetadata>): MsgReplaceAccountMetadata {
    const message = createBaseMsgReplaceAccountMetadata();
    message.domain = object.domain ?? "";
    message.name = object.name ?? "";
    message.owner = object.owner ?? "";
    message.payer = object.payer ?? "";
    message.newMetadataUri = object.newMetadataUri ?? "";
    return message;
  },
  fromAmino(object: MsgReplaceAccountMetadataAmino): MsgReplaceAccountMetadata {
    return {
      domain: object.domain,
      name: object.name,
      owner: object.owner,
      payer: object.payer,
      newMetadataUri: object.new_metadata_uri
    };
  },
  toAmino(message: MsgReplaceAccountMetadata): MsgReplaceAccountMetadataAmino {
    const obj: any = {};
    obj.domain = message.domain;
    obj.name = message.name;
    obj.owner = message.owner;
    obj.payer = message.payer;
    obj.new_metadata_uri = message.newMetadataUri;
    return obj;
  },
  fromAminoMsg(object: MsgReplaceAccountMetadataAminoMsg): MsgReplaceAccountMetadata {
    return MsgReplaceAccountMetadata.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgReplaceAccountMetadataProtoMsg): MsgReplaceAccountMetadata {
    return MsgReplaceAccountMetadata.decode(message.value);
  },
  toProto(message: MsgReplaceAccountMetadata): Uint8Array {
    return MsgReplaceAccountMetadata.encode(message).finish();
  },
  toProtoMsg(message: MsgReplaceAccountMetadata): MsgReplaceAccountMetadataProtoMsg {
    return {
      typeUrl: "/starnamed.x.starname.v1beta1.MsgReplaceAccountMetadata",
      value: MsgReplaceAccountMetadata.encode(message).finish()
    };
  }
};
function createBaseMsgReplaceAccountMetadataResponse(): MsgReplaceAccountMetadataResponse {
  return {};
}
export const MsgReplaceAccountMetadataResponse = {
  typeUrl: "/starnamed.x.starname.v1beta1.MsgReplaceAccountMetadataResponse",
  encode(_: MsgReplaceAccountMetadataResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  fromJSON(_: any): MsgReplaceAccountMetadataResponse {
    return {};
  },
  fromPartial(_: Partial<MsgReplaceAccountMetadataResponse>): MsgReplaceAccountMetadataResponse {
    const message = createBaseMsgReplaceAccountMetadataResponse();
    return message;
  },
  fromAmino(_: MsgReplaceAccountMetadataResponseAmino): MsgReplaceAccountMetadataResponse {
    return {};
  },
  toAmino(_: MsgReplaceAccountMetadataResponse): MsgReplaceAccountMetadataResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgReplaceAccountMetadataResponseAminoMsg): MsgReplaceAccountMetadataResponse {
    return MsgReplaceAccountMetadataResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgReplaceAccountMetadataResponseProtoMsg): MsgReplaceAccountMetadataResponse {
    return MsgReplaceAccountMetadataResponse.decode(message.value);
  },
  toProto(message: MsgReplaceAccountMetadataResponse): Uint8Array {
    return MsgReplaceAccountMetadataResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgReplaceAccountMetadataResponse): MsgReplaceAccountMetadataResponseProtoMsg {
    return {
      typeUrl: "/starnamed.x.starname.v1beta1.MsgReplaceAccountMetadataResponse",
      value: MsgReplaceAccountMetadataResponse.encode(message).finish()
    };
  }
};
function createBaseMsgTransferAccount(): MsgTransferAccount {
  return {
    domain: "",
    name: "",
    owner: "",
    payer: "",
    newOwner: "",
    reset: false
  };
}
export const MsgTransferAccount = {
  typeUrl: "/starnamed.x.starname.v1beta1.MsgTransferAccount",
  encode(message: MsgTransferAccount, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.domain !== "") {
      writer.uint32(10).string(message.domain);
    }
    if (message.name !== "") {
      writer.uint32(18).string(message.name);
    }
    if (message.owner !== "") {
      writer.uint32(26).string(message.owner);
    }
    if (message.payer !== "") {
      writer.uint32(34).string(message.payer);
    }
    if (message.newOwner !== "") {
      writer.uint32(42).string(message.newOwner);
    }
    if (message.reset === true) {
      writer.uint32(48).bool(message.reset);
    }
    return writer;
  },
  fromJSON(object: any): MsgTransferAccount {
    return {
      domain: isSet(object.domain) ? String(object.domain) : "",
      name: isSet(object.name) ? String(object.name) : "",
      owner: isSet(object.owner) ? String(object.owner) : "",
      payer: isSet(object.payer) ? String(object.payer) : "",
      newOwner: isSet(object.newOwner) ? String(object.newOwner) : "",
      reset: isSet(object.reset) ? Boolean(object.reset) : false
    };
  },
  fromPartial(object: Partial<MsgTransferAccount>): MsgTransferAccount {
    const message = createBaseMsgTransferAccount();
    message.domain = object.domain ?? "";
    message.name = object.name ?? "";
    message.owner = object.owner ?? "";
    message.payer = object.payer ?? "";
    message.newOwner = object.newOwner ?? "";
    message.reset = object.reset ?? false;
    return message;
  },
  fromAmino(object: MsgTransferAccountAmino): MsgTransferAccount {
    return {
      domain: object.domain,
      name: object.name,
      owner: object.owner,
      payer: object.payer,
      newOwner: object.new_owner,
      reset: object.reset
    };
  },
  toAmino(message: MsgTransferAccount): MsgTransferAccountAmino {
    const obj: any = {};
    obj.domain = message.domain;
    obj.name = message.name;
    obj.owner = message.owner;
    obj.payer = message.payer;
    obj.new_owner = message.newOwner;
    obj.reset = message.reset;
    return obj;
  },
  fromAminoMsg(object: MsgTransferAccountAminoMsg): MsgTransferAccount {
    return MsgTransferAccount.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgTransferAccountProtoMsg): MsgTransferAccount {
    return MsgTransferAccount.decode(message.value);
  },
  toProto(message: MsgTransferAccount): Uint8Array {
    return MsgTransferAccount.encode(message).finish();
  },
  toProtoMsg(message: MsgTransferAccount): MsgTransferAccountProtoMsg {
    return {
      typeUrl: "/starnamed.x.starname.v1beta1.MsgTransferAccount",
      value: MsgTransferAccount.encode(message).finish()
    };
  }
};
function createBaseMsgTransferAccountResponse(): MsgTransferAccountResponse {
  return {};
}
export const MsgTransferAccountResponse = {
  typeUrl: "/starnamed.x.starname.v1beta1.MsgTransferAccountResponse",
  encode(_: MsgTransferAccountResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  fromJSON(_: any): MsgTransferAccountResponse {
    return {};
  },
  fromPartial(_: Partial<MsgTransferAccountResponse>): MsgTransferAccountResponse {
    const message = createBaseMsgTransferAccountResponse();
    return message;
  },
  fromAmino(_: MsgTransferAccountResponseAmino): MsgTransferAccountResponse {
    return {};
  },
  toAmino(_: MsgTransferAccountResponse): MsgTransferAccountResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgTransferAccountResponseAminoMsg): MsgTransferAccountResponse {
    return MsgTransferAccountResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgTransferAccountResponseProtoMsg): MsgTransferAccountResponse {
    return MsgTransferAccountResponse.decode(message.value);
  },
  toProto(message: MsgTransferAccountResponse): Uint8Array {
    return MsgTransferAccountResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgTransferAccountResponse): MsgTransferAccountResponseProtoMsg {
    return {
      typeUrl: "/starnamed.x.starname.v1beta1.MsgTransferAccountResponse",
      value: MsgTransferAccountResponse.encode(message).finish()
    };
  }
};
function createBaseMsgTransferDomain(): MsgTransferDomain {
  return {
    domain: "",
    owner: "",
    payer: "",
    newAdmin: "",
    transferFlag: BigInt(0)
  };
}
export const MsgTransferDomain = {
  typeUrl: "/starnamed.x.starname.v1beta1.MsgTransferDomain",
  encode(message: MsgTransferDomain, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.domain !== "") {
      writer.uint32(10).string(message.domain);
    }
    if (message.owner !== "") {
      writer.uint32(18).string(message.owner);
    }
    if (message.payer !== "") {
      writer.uint32(26).string(message.payer);
    }
    if (message.newAdmin !== "") {
      writer.uint32(34).string(message.newAdmin);
    }
    if (message.transferFlag !== BigInt(0)) {
      writer.uint32(40).int64(message.transferFlag);
    }
    return writer;
  },
  fromJSON(object: any): MsgTransferDomain {
    return {
      domain: isSet(object.domain) ? String(object.domain) : "",
      owner: isSet(object.owner) ? String(object.owner) : "",
      payer: isSet(object.payer) ? String(object.payer) : "",
      newAdmin: isSet(object.newAdmin) ? String(object.newAdmin) : "",
      transferFlag: isSet(object.transferFlag) ? BigInt(object.transferFlag.toString()) : BigInt(0)
    };
  },
  fromPartial(object: Partial<MsgTransferDomain>): MsgTransferDomain {
    const message = createBaseMsgTransferDomain();
    message.domain = object.domain ?? "";
    message.owner = object.owner ?? "";
    message.payer = object.payer ?? "";
    message.newAdmin = object.newAdmin ?? "";
    message.transferFlag = object.transferFlag !== undefined && object.transferFlag !== null ? BigInt(object.transferFlag.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object: MsgTransferDomainAmino): MsgTransferDomain {
    return {
      domain: object.domain,
      owner: object.owner,
      payer: object.payer,
      newAdmin: object.new_admin,
      transferFlag: BigInt(object.transfer_flag)
    };
  },
  toAmino(message: MsgTransferDomain): MsgTransferDomainAmino {
    const obj: any = {};
    obj.domain = message.domain;
    obj.owner = message.owner;
    obj.payer = message.payer;
    obj.new_admin = message.newAdmin;
    obj.transfer_flag = message.transferFlag ? message.transferFlag.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: MsgTransferDomainAminoMsg): MsgTransferDomain {
    return MsgTransferDomain.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgTransferDomainProtoMsg): MsgTransferDomain {
    return MsgTransferDomain.decode(message.value);
  },
  toProto(message: MsgTransferDomain): Uint8Array {
    return MsgTransferDomain.encode(message).finish();
  },
  toProtoMsg(message: MsgTransferDomain): MsgTransferDomainProtoMsg {
    return {
      typeUrl: "/starnamed.x.starname.v1beta1.MsgTransferDomain",
      value: MsgTransferDomain.encode(message).finish()
    };
  }
};
function createBaseMsgTransferDomainResponse(): MsgTransferDomainResponse {
  return {};
}
export const MsgTransferDomainResponse = {
  typeUrl: "/starnamed.x.starname.v1beta1.MsgTransferDomainResponse",
  encode(_: MsgTransferDomainResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  fromJSON(_: any): MsgTransferDomainResponse {
    return {};
  },
  fromPartial(_: Partial<MsgTransferDomainResponse>): MsgTransferDomainResponse {
    const message = createBaseMsgTransferDomainResponse();
    return message;
  },
  fromAmino(_: MsgTransferDomainResponseAmino): MsgTransferDomainResponse {
    return {};
  },
  toAmino(_: MsgTransferDomainResponse): MsgTransferDomainResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgTransferDomainResponseAminoMsg): MsgTransferDomainResponse {
    return MsgTransferDomainResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgTransferDomainResponseProtoMsg): MsgTransferDomainResponse {
    return MsgTransferDomainResponse.decode(message.value);
  },
  toProto(message: MsgTransferDomainResponse): Uint8Array {
    return MsgTransferDomainResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgTransferDomainResponse): MsgTransferDomainResponseProtoMsg {
    return {
      typeUrl: "/starnamed.x.starname.v1beta1.MsgTransferDomainResponse",
      value: MsgTransferDomainResponse.encode(message).finish()
    };
  }
};