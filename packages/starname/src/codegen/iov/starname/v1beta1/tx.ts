import { Resource, ResourceSDKType } from "./types";
import { Long, isSet, bytesFromBase64 } from "../../../helpers";
import * as _m0 from "protobufjs/minimal";
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
/** MsgDeleteAccount is the request model used to delete an account */
export interface MsgDeleteAccountSDKType {
  domain: string;
  name: string;
  owner: string;
  payer: string;
}
/** MsgDeleteAccountResponse returns an empty response. */
export interface MsgDeleteAccountResponse {}
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
/** MsgDeleteDomain is the request model to delete a domain */
export interface MsgDeleteDomainSDKType {
  domain: string;
  owner: string;
  payer: string;
}
/** MsgDeleteDomainResponse returns an empty response. */
export interface MsgDeleteDomainResponse {}
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
/** MsgRenewAccount is the request model used to renew accounts */
export interface MsgRenewAccountSDKType {
  domain: string;
  name: string;
  signer: string;
  payer: string;
}
/** MsgRenewAccountResponse returns an empty response. */
export interface MsgRenewAccountResponse {}
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
/** MsgRenewDomain is the request model used to renew a domain */
export interface MsgRenewDomainSDKType {
  domain: string;
  signer: string;
  payer: string;
}
/** MsgRegisterDomain returns an empty response. */
export interface MsgRenewDomainResponse {}
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
  transferFlag: Long;
}
/** MsgTransferDomain is the request model used to transfer a domain */
export interface MsgTransferDomainSDKType {
  domain: string;
  owner: string;
  payer: string;
  new_admin: string;
  transfer_flag: Long;
}
/** MsgTransferDomainResponse returns an empty response. */
export interface MsgTransferDomainResponse {}
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
  encode(message: MsgAddAccountCertificate, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
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
  }
};
function createBaseMsgAddAccountCertificateResponse(): MsgAddAccountCertificateResponse {
  return {};
}
export const MsgAddAccountCertificateResponse = {
  encode(_: MsgAddAccountCertificateResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },
  fromJSON(_: any): MsgAddAccountCertificateResponse {
    return {};
  },
  fromPartial(_: Partial<MsgAddAccountCertificateResponse>): MsgAddAccountCertificateResponse {
    const message = createBaseMsgAddAccountCertificateResponse();
    return message;
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
  encode(message: MsgDeleteAccountCertificate, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
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
  }
};
function createBaseMsgDeleteAccountCertificateResponse(): MsgDeleteAccountCertificateResponse {
  return {};
}
export const MsgDeleteAccountCertificateResponse = {
  encode(_: MsgDeleteAccountCertificateResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },
  fromJSON(_: any): MsgDeleteAccountCertificateResponse {
    return {};
  },
  fromPartial(_: Partial<MsgDeleteAccountCertificateResponse>): MsgDeleteAccountCertificateResponse {
    const message = createBaseMsgDeleteAccountCertificateResponse();
    return message;
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
  encode(message: MsgDeleteAccount, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
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
  }
};
function createBaseMsgDeleteAccountResponse(): MsgDeleteAccountResponse {
  return {};
}
export const MsgDeleteAccountResponse = {
  encode(_: MsgDeleteAccountResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },
  fromJSON(_: any): MsgDeleteAccountResponse {
    return {};
  },
  fromPartial(_: Partial<MsgDeleteAccountResponse>): MsgDeleteAccountResponse {
    const message = createBaseMsgDeleteAccountResponse();
    return message;
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
  encode(message: MsgDeleteDomain, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
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
  }
};
function createBaseMsgDeleteDomainResponse(): MsgDeleteDomainResponse {
  return {};
}
export const MsgDeleteDomainResponse = {
  encode(_: MsgDeleteDomainResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },
  fromJSON(_: any): MsgDeleteDomainResponse {
    return {};
  },
  fromPartial(_: Partial<MsgDeleteDomainResponse>): MsgDeleteDomainResponse {
    const message = createBaseMsgDeleteDomainResponse();
    return message;
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
  encode(message: MsgRegisterAccount, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
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
  }
};
function createBaseMsgRegisterAccountResponse(): MsgRegisterAccountResponse {
  return {};
}
export const MsgRegisterAccountResponse = {
  encode(_: MsgRegisterAccountResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },
  fromJSON(_: any): MsgRegisterAccountResponse {
    return {};
  },
  fromPartial(_: Partial<MsgRegisterAccountResponse>): MsgRegisterAccountResponse {
    const message = createBaseMsgRegisterAccountResponse();
    return message;
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
  encode(message: MsgRegisterDomain, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
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
  }
};
function createBaseMsgRegisterDomainResponse(): MsgRegisterDomainResponse {
  return {};
}
export const MsgRegisterDomainResponse = {
  encode(_: MsgRegisterDomainResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },
  fromJSON(_: any): MsgRegisterDomainResponse {
    return {};
  },
  fromPartial(_: Partial<MsgRegisterDomainResponse>): MsgRegisterDomainResponse {
    const message = createBaseMsgRegisterDomainResponse();
    return message;
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
  encode(message: MsgRenewAccount, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
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
  }
};
function createBaseMsgRenewAccountResponse(): MsgRenewAccountResponse {
  return {};
}
export const MsgRenewAccountResponse = {
  encode(_: MsgRenewAccountResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },
  fromJSON(_: any): MsgRenewAccountResponse {
    return {};
  },
  fromPartial(_: Partial<MsgRenewAccountResponse>): MsgRenewAccountResponse {
    const message = createBaseMsgRenewAccountResponse();
    return message;
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
  encode(message: MsgRenewDomain, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
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
  }
};
function createBaseMsgRenewDomainResponse(): MsgRenewDomainResponse {
  return {};
}
export const MsgRenewDomainResponse = {
  encode(_: MsgRenewDomainResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },
  fromJSON(_: any): MsgRenewDomainResponse {
    return {};
  },
  fromPartial(_: Partial<MsgRenewDomainResponse>): MsgRenewDomainResponse {
    const message = createBaseMsgRenewDomainResponse();
    return message;
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
  encode(message: MsgReplaceAccountResources, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
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
  }
};
function createBaseMsgReplaceAccountResourcesResponse(): MsgReplaceAccountResourcesResponse {
  return {};
}
export const MsgReplaceAccountResourcesResponse = {
  encode(_: MsgReplaceAccountResourcesResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },
  fromJSON(_: any): MsgReplaceAccountResourcesResponse {
    return {};
  },
  fromPartial(_: Partial<MsgReplaceAccountResourcesResponse>): MsgReplaceAccountResourcesResponse {
    const message = createBaseMsgReplaceAccountResourcesResponse();
    return message;
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
  encode(message: MsgReplaceAccountMetadata, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
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
  }
};
function createBaseMsgReplaceAccountMetadataResponse(): MsgReplaceAccountMetadataResponse {
  return {};
}
export const MsgReplaceAccountMetadataResponse = {
  encode(_: MsgReplaceAccountMetadataResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },
  fromJSON(_: any): MsgReplaceAccountMetadataResponse {
    return {};
  },
  fromPartial(_: Partial<MsgReplaceAccountMetadataResponse>): MsgReplaceAccountMetadataResponse {
    const message = createBaseMsgReplaceAccountMetadataResponse();
    return message;
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
  encode(message: MsgTransferAccount, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
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
  }
};
function createBaseMsgTransferAccountResponse(): MsgTransferAccountResponse {
  return {};
}
export const MsgTransferAccountResponse = {
  encode(_: MsgTransferAccountResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },
  fromJSON(_: any): MsgTransferAccountResponse {
    return {};
  },
  fromPartial(_: Partial<MsgTransferAccountResponse>): MsgTransferAccountResponse {
    const message = createBaseMsgTransferAccountResponse();
    return message;
  }
};
function createBaseMsgTransferDomain(): MsgTransferDomain {
  return {
    domain: "",
    owner: "",
    payer: "",
    newAdmin: "",
    transferFlag: Long.ZERO
  };
}
export const MsgTransferDomain = {
  encode(message: MsgTransferDomain, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
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
    if (!message.transferFlag.isZero()) {
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
      transferFlag: isSet(object.transferFlag) ? Long.fromValue(object.transferFlag) : Long.ZERO
    };
  },
  fromPartial(object: Partial<MsgTransferDomain>): MsgTransferDomain {
    const message = createBaseMsgTransferDomain();
    message.domain = object.domain ?? "";
    message.owner = object.owner ?? "";
    message.payer = object.payer ?? "";
    message.newAdmin = object.newAdmin ?? "";
    message.transferFlag = object.transferFlag !== undefined && object.transferFlag !== null ? Long.fromValue(object.transferFlag) : Long.ZERO;
    return message;
  }
};
function createBaseMsgTransferDomainResponse(): MsgTransferDomainResponse {
  return {};
}
export const MsgTransferDomainResponse = {
  encode(_: MsgTransferDomainResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },
  fromJSON(_: any): MsgTransferDomainResponse {
    return {};
  },
  fromPartial(_: Partial<MsgTransferDomainResponse>): MsgTransferDomainResponse {
    const message = createBaseMsgTransferDomainResponse();
    return message;
  }
};