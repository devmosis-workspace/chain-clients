import * as _m0 from "protobufjs/minimal";
import { isSet } from "../../../helpers";
export interface CreateRoyaltyConfigAuthorization {
  classId: string;
}
export interface CreateRoyaltyConfigAuthorizationSDKType {
  class_id: string;
}
export interface UpdateRoyaltyConfigAuthorization {
  classId: string;
}
export interface UpdateRoyaltyConfigAuthorizationSDKType {
  class_id: string;
}
export interface DeleteRoyaltyConfigAuthorization {
  classId: string;
}
export interface DeleteRoyaltyConfigAuthorizationSDKType {
  class_id: string;
}
export interface CreateListingAuthorization {
  classId: string;
  nftId: string;
}
export interface CreateListingAuthorizationSDKType {
  class_id: string;
  nft_id: string;
}
export interface UpdateListingAuthorization {
  classId: string;
  nftId: string;
}
export interface UpdateListingAuthorizationSDKType {
  class_id: string;
  nft_id: string;
}
export interface DeleteListingAuthorization {
  classId: string;
  nftId: string;
}
export interface DeleteListingAuthorizationSDKType {
  class_id: string;
  nft_id: string;
}
export interface CreateOfferAuthorization {
  classId: string;
  nftId: string;
}
export interface CreateOfferAuthorizationSDKType {
  class_id: string;
  nft_id: string;
}
export interface UpdateOfferAuthorization {
  classId: string;
  nftId: string;
}
export interface UpdateOfferAuthorizationSDKType {
  class_id: string;
  nft_id: string;
}
export interface DeleteOfferAuthorization {
  classId: string;
  nftId: string;
}
export interface DeleteOfferAuthorizationSDKType {
  class_id: string;
  nft_id: string;
}
export interface NewClassAuthorization {
  iscnIdPrefix: string;
}
export interface NewClassAuthorizationSDKType {
  iscn_id_prefix: string;
}
export interface UpdateClassAuthorization {
  classId: string;
}
export interface UpdateClassAuthorizationSDKType {
  class_id: string;
}
export interface MintNFTAuthorization {
  classId: string;
}
export interface MintNFTAuthorizationSDKType {
  class_id: string;
}
export interface SendNFTAuthorization {
  classId: string;
  id: string;
}
export interface SendNFTAuthorizationSDKType {
  class_id: string;
  id: string;
}
function createBaseCreateRoyaltyConfigAuthorization(): CreateRoyaltyConfigAuthorization {
  return {
    classId: ""
  };
}
export const CreateRoyaltyConfigAuthorization = {
  encode(message: CreateRoyaltyConfigAuthorization, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.classId !== "") {
      writer.uint32(10).string(message.classId);
    }
    return writer;
  },
  fromJSON(object: any): CreateRoyaltyConfigAuthorization {
    return {
      classId: isSet(object.classId) ? String(object.classId) : ""
    };
  },
  fromPartial(object: Partial<CreateRoyaltyConfigAuthorization>): CreateRoyaltyConfigAuthorization {
    const message = createBaseCreateRoyaltyConfigAuthorization();
    message.classId = object.classId ?? "";
    return message;
  }
};
function createBaseUpdateRoyaltyConfigAuthorization(): UpdateRoyaltyConfigAuthorization {
  return {
    classId: ""
  };
}
export const UpdateRoyaltyConfigAuthorization = {
  encode(message: UpdateRoyaltyConfigAuthorization, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.classId !== "") {
      writer.uint32(10).string(message.classId);
    }
    return writer;
  },
  fromJSON(object: any): UpdateRoyaltyConfigAuthorization {
    return {
      classId: isSet(object.classId) ? String(object.classId) : ""
    };
  },
  fromPartial(object: Partial<UpdateRoyaltyConfigAuthorization>): UpdateRoyaltyConfigAuthorization {
    const message = createBaseUpdateRoyaltyConfigAuthorization();
    message.classId = object.classId ?? "";
    return message;
  }
};
function createBaseDeleteRoyaltyConfigAuthorization(): DeleteRoyaltyConfigAuthorization {
  return {
    classId: ""
  };
}
export const DeleteRoyaltyConfigAuthorization = {
  encode(message: DeleteRoyaltyConfigAuthorization, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.classId !== "") {
      writer.uint32(10).string(message.classId);
    }
    return writer;
  },
  fromJSON(object: any): DeleteRoyaltyConfigAuthorization {
    return {
      classId: isSet(object.classId) ? String(object.classId) : ""
    };
  },
  fromPartial(object: Partial<DeleteRoyaltyConfigAuthorization>): DeleteRoyaltyConfigAuthorization {
    const message = createBaseDeleteRoyaltyConfigAuthorization();
    message.classId = object.classId ?? "";
    return message;
  }
};
function createBaseCreateListingAuthorization(): CreateListingAuthorization {
  return {
    classId: "",
    nftId: ""
  };
}
export const CreateListingAuthorization = {
  encode(message: CreateListingAuthorization, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.classId !== "") {
      writer.uint32(10).string(message.classId);
    }
    if (message.nftId !== "") {
      writer.uint32(18).string(message.nftId);
    }
    return writer;
  },
  fromJSON(object: any): CreateListingAuthorization {
    return {
      classId: isSet(object.classId) ? String(object.classId) : "",
      nftId: isSet(object.nftId) ? String(object.nftId) : ""
    };
  },
  fromPartial(object: Partial<CreateListingAuthorization>): CreateListingAuthorization {
    const message = createBaseCreateListingAuthorization();
    message.classId = object.classId ?? "";
    message.nftId = object.nftId ?? "";
    return message;
  }
};
function createBaseUpdateListingAuthorization(): UpdateListingAuthorization {
  return {
    classId: "",
    nftId: ""
  };
}
export const UpdateListingAuthorization = {
  encode(message: UpdateListingAuthorization, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.classId !== "") {
      writer.uint32(10).string(message.classId);
    }
    if (message.nftId !== "") {
      writer.uint32(18).string(message.nftId);
    }
    return writer;
  },
  fromJSON(object: any): UpdateListingAuthorization {
    return {
      classId: isSet(object.classId) ? String(object.classId) : "",
      nftId: isSet(object.nftId) ? String(object.nftId) : ""
    };
  },
  fromPartial(object: Partial<UpdateListingAuthorization>): UpdateListingAuthorization {
    const message = createBaseUpdateListingAuthorization();
    message.classId = object.classId ?? "";
    message.nftId = object.nftId ?? "";
    return message;
  }
};
function createBaseDeleteListingAuthorization(): DeleteListingAuthorization {
  return {
    classId: "",
    nftId: ""
  };
}
export const DeleteListingAuthorization = {
  encode(message: DeleteListingAuthorization, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.classId !== "") {
      writer.uint32(10).string(message.classId);
    }
    if (message.nftId !== "") {
      writer.uint32(18).string(message.nftId);
    }
    return writer;
  },
  fromJSON(object: any): DeleteListingAuthorization {
    return {
      classId: isSet(object.classId) ? String(object.classId) : "",
      nftId: isSet(object.nftId) ? String(object.nftId) : ""
    };
  },
  fromPartial(object: Partial<DeleteListingAuthorization>): DeleteListingAuthorization {
    const message = createBaseDeleteListingAuthorization();
    message.classId = object.classId ?? "";
    message.nftId = object.nftId ?? "";
    return message;
  }
};
function createBaseCreateOfferAuthorization(): CreateOfferAuthorization {
  return {
    classId: "",
    nftId: ""
  };
}
export const CreateOfferAuthorization = {
  encode(message: CreateOfferAuthorization, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.classId !== "") {
      writer.uint32(10).string(message.classId);
    }
    if (message.nftId !== "") {
      writer.uint32(18).string(message.nftId);
    }
    return writer;
  },
  fromJSON(object: any): CreateOfferAuthorization {
    return {
      classId: isSet(object.classId) ? String(object.classId) : "",
      nftId: isSet(object.nftId) ? String(object.nftId) : ""
    };
  },
  fromPartial(object: Partial<CreateOfferAuthorization>): CreateOfferAuthorization {
    const message = createBaseCreateOfferAuthorization();
    message.classId = object.classId ?? "";
    message.nftId = object.nftId ?? "";
    return message;
  }
};
function createBaseUpdateOfferAuthorization(): UpdateOfferAuthorization {
  return {
    classId: "",
    nftId: ""
  };
}
export const UpdateOfferAuthorization = {
  encode(message: UpdateOfferAuthorization, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.classId !== "") {
      writer.uint32(10).string(message.classId);
    }
    if (message.nftId !== "") {
      writer.uint32(18).string(message.nftId);
    }
    return writer;
  },
  fromJSON(object: any): UpdateOfferAuthorization {
    return {
      classId: isSet(object.classId) ? String(object.classId) : "",
      nftId: isSet(object.nftId) ? String(object.nftId) : ""
    };
  },
  fromPartial(object: Partial<UpdateOfferAuthorization>): UpdateOfferAuthorization {
    const message = createBaseUpdateOfferAuthorization();
    message.classId = object.classId ?? "";
    message.nftId = object.nftId ?? "";
    return message;
  }
};
function createBaseDeleteOfferAuthorization(): DeleteOfferAuthorization {
  return {
    classId: "",
    nftId: ""
  };
}
export const DeleteOfferAuthorization = {
  encode(message: DeleteOfferAuthorization, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.classId !== "") {
      writer.uint32(10).string(message.classId);
    }
    if (message.nftId !== "") {
      writer.uint32(18).string(message.nftId);
    }
    return writer;
  },
  fromJSON(object: any): DeleteOfferAuthorization {
    return {
      classId: isSet(object.classId) ? String(object.classId) : "",
      nftId: isSet(object.nftId) ? String(object.nftId) : ""
    };
  },
  fromPartial(object: Partial<DeleteOfferAuthorization>): DeleteOfferAuthorization {
    const message = createBaseDeleteOfferAuthorization();
    message.classId = object.classId ?? "";
    message.nftId = object.nftId ?? "";
    return message;
  }
};
function createBaseNewClassAuthorization(): NewClassAuthorization {
  return {
    iscnIdPrefix: ""
  };
}
export const NewClassAuthorization = {
  encode(message: NewClassAuthorization, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.iscnIdPrefix !== "") {
      writer.uint32(10).string(message.iscnIdPrefix);
    }
    return writer;
  },
  fromJSON(object: any): NewClassAuthorization {
    return {
      iscnIdPrefix: isSet(object.iscnIdPrefix) ? String(object.iscnIdPrefix) : ""
    };
  },
  fromPartial(object: Partial<NewClassAuthorization>): NewClassAuthorization {
    const message = createBaseNewClassAuthorization();
    message.iscnIdPrefix = object.iscnIdPrefix ?? "";
    return message;
  }
};
function createBaseUpdateClassAuthorization(): UpdateClassAuthorization {
  return {
    classId: ""
  };
}
export const UpdateClassAuthorization = {
  encode(message: UpdateClassAuthorization, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.classId !== "") {
      writer.uint32(10).string(message.classId);
    }
    return writer;
  },
  fromJSON(object: any): UpdateClassAuthorization {
    return {
      classId: isSet(object.classId) ? String(object.classId) : ""
    };
  },
  fromPartial(object: Partial<UpdateClassAuthorization>): UpdateClassAuthorization {
    const message = createBaseUpdateClassAuthorization();
    message.classId = object.classId ?? "";
    return message;
  }
};
function createBaseMintNFTAuthorization(): MintNFTAuthorization {
  return {
    classId: ""
  };
}
export const MintNFTAuthorization = {
  encode(message: MintNFTAuthorization, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.classId !== "") {
      writer.uint32(10).string(message.classId);
    }
    return writer;
  },
  fromJSON(object: any): MintNFTAuthorization {
    return {
      classId: isSet(object.classId) ? String(object.classId) : ""
    };
  },
  fromPartial(object: Partial<MintNFTAuthorization>): MintNFTAuthorization {
    const message = createBaseMintNFTAuthorization();
    message.classId = object.classId ?? "";
    return message;
  }
};
function createBaseSendNFTAuthorization(): SendNFTAuthorization {
  return {
    classId: "",
    id: ""
  };
}
export const SendNFTAuthorization = {
  encode(message: SendNFTAuthorization, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.classId !== "") {
      writer.uint32(10).string(message.classId);
    }
    if (message.id !== "") {
      writer.uint32(18).string(message.id);
    }
    return writer;
  },
  fromJSON(object: any): SendNFTAuthorization {
    return {
      classId: isSet(object.classId) ? String(object.classId) : "",
      id: isSet(object.id) ? String(object.id) : ""
    };
  },
  fromPartial(object: Partial<SendNFTAuthorization>): SendNFTAuthorization {
    const message = createBaseSendNFTAuthorization();
    message.classId = object.classId ?? "";
    message.id = object.id ?? "";
    return message;
  }
};