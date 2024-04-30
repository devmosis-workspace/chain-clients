import { BinaryWriter } from "../../../binary";
import { isSet } from "../../../helpers";
export interface CreateRoyaltyConfigAuthorization {
  $typeUrl?: "/likechain.likenft.v1.CreateRoyaltyConfigAuthorization";
  classId: string;
}
export interface CreateRoyaltyConfigAuthorizationProtoMsg {
  typeUrl: "/likechain.likenft.v1.CreateRoyaltyConfigAuthorization";
  value: Uint8Array;
}
export interface CreateRoyaltyConfigAuthorizationAmino {
  class_id?: string;
}
export interface CreateRoyaltyConfigAuthorizationAminoMsg {
  type: "/likechain.likenft.v1.CreateRoyaltyConfigAuthorization";
  value: CreateRoyaltyConfigAuthorizationAmino;
}
export interface CreateRoyaltyConfigAuthorizationSDKType {
  $typeUrl?: "/likechain.likenft.v1.CreateRoyaltyConfigAuthorization";
  class_id: string;
}
export interface UpdateRoyaltyConfigAuthorization {
  $typeUrl?: "/likechain.likenft.v1.UpdateRoyaltyConfigAuthorization";
  classId: string;
}
export interface UpdateRoyaltyConfigAuthorizationProtoMsg {
  typeUrl: "/likechain.likenft.v1.UpdateRoyaltyConfigAuthorization";
  value: Uint8Array;
}
export interface UpdateRoyaltyConfigAuthorizationAmino {
  class_id?: string;
}
export interface UpdateRoyaltyConfigAuthorizationAminoMsg {
  type: "/likechain.likenft.v1.UpdateRoyaltyConfigAuthorization";
  value: UpdateRoyaltyConfigAuthorizationAmino;
}
export interface UpdateRoyaltyConfigAuthorizationSDKType {
  $typeUrl?: "/likechain.likenft.v1.UpdateRoyaltyConfigAuthorization";
  class_id: string;
}
export interface DeleteRoyaltyConfigAuthorization {
  $typeUrl?: "/likechain.likenft.v1.DeleteRoyaltyConfigAuthorization";
  classId: string;
}
export interface DeleteRoyaltyConfigAuthorizationProtoMsg {
  typeUrl: "/likechain.likenft.v1.DeleteRoyaltyConfigAuthorization";
  value: Uint8Array;
}
export interface DeleteRoyaltyConfigAuthorizationAmino {
  class_id?: string;
}
export interface DeleteRoyaltyConfigAuthorizationAminoMsg {
  type: "/likechain.likenft.v1.DeleteRoyaltyConfigAuthorization";
  value: DeleteRoyaltyConfigAuthorizationAmino;
}
export interface DeleteRoyaltyConfigAuthorizationSDKType {
  $typeUrl?: "/likechain.likenft.v1.DeleteRoyaltyConfigAuthorization";
  class_id: string;
}
export interface CreateListingAuthorization {
  $typeUrl?: "/likechain.likenft.v1.CreateListingAuthorization";
  classId: string;
  nftId: string;
}
export interface CreateListingAuthorizationProtoMsg {
  typeUrl: "/likechain.likenft.v1.CreateListingAuthorization";
  value: Uint8Array;
}
export interface CreateListingAuthorizationAmino {
  class_id?: string;
  nft_id?: string;
}
export interface CreateListingAuthorizationAminoMsg {
  type: "/likechain.likenft.v1.CreateListingAuthorization";
  value: CreateListingAuthorizationAmino;
}
export interface CreateListingAuthorizationSDKType {
  $typeUrl?: "/likechain.likenft.v1.CreateListingAuthorization";
  class_id: string;
  nft_id: string;
}
export interface UpdateListingAuthorization {
  $typeUrl?: "/likechain.likenft.v1.UpdateListingAuthorization";
  classId: string;
  nftId: string;
}
export interface UpdateListingAuthorizationProtoMsg {
  typeUrl: "/likechain.likenft.v1.UpdateListingAuthorization";
  value: Uint8Array;
}
export interface UpdateListingAuthorizationAmino {
  class_id?: string;
  nft_id?: string;
}
export interface UpdateListingAuthorizationAminoMsg {
  type: "/likechain.likenft.v1.UpdateListingAuthorization";
  value: UpdateListingAuthorizationAmino;
}
export interface UpdateListingAuthorizationSDKType {
  $typeUrl?: "/likechain.likenft.v1.UpdateListingAuthorization";
  class_id: string;
  nft_id: string;
}
export interface DeleteListingAuthorization {
  $typeUrl?: "/likechain.likenft.v1.DeleteListingAuthorization";
  classId: string;
  nftId: string;
}
export interface DeleteListingAuthorizationProtoMsg {
  typeUrl: "/likechain.likenft.v1.DeleteListingAuthorization";
  value: Uint8Array;
}
export interface DeleteListingAuthorizationAmino {
  class_id?: string;
  nft_id?: string;
}
export interface DeleteListingAuthorizationAminoMsg {
  type: "/likechain.likenft.v1.DeleteListingAuthorization";
  value: DeleteListingAuthorizationAmino;
}
export interface DeleteListingAuthorizationSDKType {
  $typeUrl?: "/likechain.likenft.v1.DeleteListingAuthorization";
  class_id: string;
  nft_id: string;
}
export interface CreateOfferAuthorization {
  $typeUrl?: "/likechain.likenft.v1.CreateOfferAuthorization";
  classId: string;
  nftId: string;
}
export interface CreateOfferAuthorizationProtoMsg {
  typeUrl: "/likechain.likenft.v1.CreateOfferAuthorization";
  value: Uint8Array;
}
export interface CreateOfferAuthorizationAmino {
  class_id?: string;
  nft_id?: string;
}
export interface CreateOfferAuthorizationAminoMsg {
  type: "/likechain.likenft.v1.CreateOfferAuthorization";
  value: CreateOfferAuthorizationAmino;
}
export interface CreateOfferAuthorizationSDKType {
  $typeUrl?: "/likechain.likenft.v1.CreateOfferAuthorization";
  class_id: string;
  nft_id: string;
}
export interface UpdateOfferAuthorization {
  $typeUrl?: "/likechain.likenft.v1.UpdateOfferAuthorization";
  classId: string;
  nftId: string;
}
export interface UpdateOfferAuthorizationProtoMsg {
  typeUrl: "/likechain.likenft.v1.UpdateOfferAuthorization";
  value: Uint8Array;
}
export interface UpdateOfferAuthorizationAmino {
  class_id?: string;
  nft_id?: string;
}
export interface UpdateOfferAuthorizationAminoMsg {
  type: "/likechain.likenft.v1.UpdateOfferAuthorization";
  value: UpdateOfferAuthorizationAmino;
}
export interface UpdateOfferAuthorizationSDKType {
  $typeUrl?: "/likechain.likenft.v1.UpdateOfferAuthorization";
  class_id: string;
  nft_id: string;
}
export interface DeleteOfferAuthorization {
  $typeUrl?: "/likechain.likenft.v1.DeleteOfferAuthorization";
  classId: string;
  nftId: string;
}
export interface DeleteOfferAuthorizationProtoMsg {
  typeUrl: "/likechain.likenft.v1.DeleteOfferAuthorization";
  value: Uint8Array;
}
export interface DeleteOfferAuthorizationAmino {
  class_id?: string;
  nft_id?: string;
}
export interface DeleteOfferAuthorizationAminoMsg {
  type: "/likechain.likenft.v1.DeleteOfferAuthorization";
  value: DeleteOfferAuthorizationAmino;
}
export interface DeleteOfferAuthorizationSDKType {
  $typeUrl?: "/likechain.likenft.v1.DeleteOfferAuthorization";
  class_id: string;
  nft_id: string;
}
export interface NewClassAuthorization {
  $typeUrl?: "/likechain.likenft.v1.NewClassAuthorization";
  iscnIdPrefix: string;
}
export interface NewClassAuthorizationProtoMsg {
  typeUrl: "/likechain.likenft.v1.NewClassAuthorization";
  value: Uint8Array;
}
export interface NewClassAuthorizationAmino {
  iscn_id_prefix?: string;
}
export interface NewClassAuthorizationAminoMsg {
  type: "/likechain.likenft.v1.NewClassAuthorization";
  value: NewClassAuthorizationAmino;
}
export interface NewClassAuthorizationSDKType {
  $typeUrl?: "/likechain.likenft.v1.NewClassAuthorization";
  iscn_id_prefix: string;
}
export interface UpdateClassAuthorization {
  $typeUrl?: "/likechain.likenft.v1.UpdateClassAuthorization";
  classId: string;
}
export interface UpdateClassAuthorizationProtoMsg {
  typeUrl: "/likechain.likenft.v1.UpdateClassAuthorization";
  value: Uint8Array;
}
export interface UpdateClassAuthorizationAmino {
  class_id?: string;
}
export interface UpdateClassAuthorizationAminoMsg {
  type: "/likechain.likenft.v1.UpdateClassAuthorization";
  value: UpdateClassAuthorizationAmino;
}
export interface UpdateClassAuthorizationSDKType {
  $typeUrl?: "/likechain.likenft.v1.UpdateClassAuthorization";
  class_id: string;
}
export interface MintNFTAuthorization {
  $typeUrl?: "/likechain.likenft.v1.MintNFTAuthorization";
  classId: string;
}
export interface MintNFTAuthorizationProtoMsg {
  typeUrl: "/likechain.likenft.v1.MintNFTAuthorization";
  value: Uint8Array;
}
export interface MintNFTAuthorizationAmino {
  class_id?: string;
}
export interface MintNFTAuthorizationAminoMsg {
  type: "/likechain.likenft.v1.MintNFTAuthorization";
  value: MintNFTAuthorizationAmino;
}
export interface MintNFTAuthorizationSDKType {
  $typeUrl?: "/likechain.likenft.v1.MintNFTAuthorization";
  class_id: string;
}
export interface SendNFTAuthorization {
  $typeUrl?: "/likechain.likenft.v1.SendNFTAuthorization";
  classId: string;
  id: string;
}
export interface SendNFTAuthorizationProtoMsg {
  typeUrl: "/likechain.likenft.v1.SendNFTAuthorization";
  value: Uint8Array;
}
export interface SendNFTAuthorizationAmino {
  class_id?: string;
  id?: string;
}
export interface SendNFTAuthorizationAminoMsg {
  type: "/likechain.likenft.v1.SendNFTAuthorization";
  value: SendNFTAuthorizationAmino;
}
export interface SendNFTAuthorizationSDKType {
  $typeUrl?: "/likechain.likenft.v1.SendNFTAuthorization";
  class_id: string;
  id: string;
}
function createBaseCreateRoyaltyConfigAuthorization(): CreateRoyaltyConfigAuthorization {
  return {
    $typeUrl: "/likechain.likenft.v1.CreateRoyaltyConfigAuthorization",
    classId: ""
  };
}
export const CreateRoyaltyConfigAuthorization = {
  typeUrl: "/likechain.likenft.v1.CreateRoyaltyConfigAuthorization",
  encode(message: CreateRoyaltyConfigAuthorization, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
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
  },
  fromAmino(object: CreateRoyaltyConfigAuthorizationAmino): CreateRoyaltyConfigAuthorization {
    const message = createBaseCreateRoyaltyConfigAuthorization();
    if (object.class_id !== undefined && object.class_id !== null) {
      message.classId = object.class_id;
    }
    return message;
  },
  toAmino(message: CreateRoyaltyConfigAuthorization): CreateRoyaltyConfigAuthorizationAmino {
    const obj: any = {};
    obj.class_id = message.classId;
    return obj;
  },
  fromAminoMsg(object: CreateRoyaltyConfigAuthorizationAminoMsg): CreateRoyaltyConfigAuthorization {
    return CreateRoyaltyConfigAuthorization.fromAmino(object.value);
  },
  fromProtoMsg(message: CreateRoyaltyConfigAuthorizationProtoMsg): CreateRoyaltyConfigAuthorization {
    return CreateRoyaltyConfigAuthorization.decode(message.value);
  },
  toProto(message: CreateRoyaltyConfigAuthorization): Uint8Array {
    return CreateRoyaltyConfigAuthorization.encode(message).finish();
  },
  toProtoMsg(message: CreateRoyaltyConfigAuthorization): CreateRoyaltyConfigAuthorizationProtoMsg {
    return {
      typeUrl: "/likechain.likenft.v1.CreateRoyaltyConfigAuthorization",
      value: CreateRoyaltyConfigAuthorization.encode(message).finish()
    };
  }
};
function createBaseUpdateRoyaltyConfigAuthorization(): UpdateRoyaltyConfigAuthorization {
  return {
    $typeUrl: "/likechain.likenft.v1.UpdateRoyaltyConfigAuthorization",
    classId: ""
  };
}
export const UpdateRoyaltyConfigAuthorization = {
  typeUrl: "/likechain.likenft.v1.UpdateRoyaltyConfigAuthorization",
  encode(message: UpdateRoyaltyConfigAuthorization, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
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
  },
  fromAmino(object: UpdateRoyaltyConfigAuthorizationAmino): UpdateRoyaltyConfigAuthorization {
    const message = createBaseUpdateRoyaltyConfigAuthorization();
    if (object.class_id !== undefined && object.class_id !== null) {
      message.classId = object.class_id;
    }
    return message;
  },
  toAmino(message: UpdateRoyaltyConfigAuthorization): UpdateRoyaltyConfigAuthorizationAmino {
    const obj: any = {};
    obj.class_id = message.classId;
    return obj;
  },
  fromAminoMsg(object: UpdateRoyaltyConfigAuthorizationAminoMsg): UpdateRoyaltyConfigAuthorization {
    return UpdateRoyaltyConfigAuthorization.fromAmino(object.value);
  },
  fromProtoMsg(message: UpdateRoyaltyConfigAuthorizationProtoMsg): UpdateRoyaltyConfigAuthorization {
    return UpdateRoyaltyConfigAuthorization.decode(message.value);
  },
  toProto(message: UpdateRoyaltyConfigAuthorization): Uint8Array {
    return UpdateRoyaltyConfigAuthorization.encode(message).finish();
  },
  toProtoMsg(message: UpdateRoyaltyConfigAuthorization): UpdateRoyaltyConfigAuthorizationProtoMsg {
    return {
      typeUrl: "/likechain.likenft.v1.UpdateRoyaltyConfigAuthorization",
      value: UpdateRoyaltyConfigAuthorization.encode(message).finish()
    };
  }
};
function createBaseDeleteRoyaltyConfigAuthorization(): DeleteRoyaltyConfigAuthorization {
  return {
    $typeUrl: "/likechain.likenft.v1.DeleteRoyaltyConfigAuthorization",
    classId: ""
  };
}
export const DeleteRoyaltyConfigAuthorization = {
  typeUrl: "/likechain.likenft.v1.DeleteRoyaltyConfigAuthorization",
  encode(message: DeleteRoyaltyConfigAuthorization, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
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
  },
  fromAmino(object: DeleteRoyaltyConfigAuthorizationAmino): DeleteRoyaltyConfigAuthorization {
    const message = createBaseDeleteRoyaltyConfigAuthorization();
    if (object.class_id !== undefined && object.class_id !== null) {
      message.classId = object.class_id;
    }
    return message;
  },
  toAmino(message: DeleteRoyaltyConfigAuthorization): DeleteRoyaltyConfigAuthorizationAmino {
    const obj: any = {};
    obj.class_id = message.classId;
    return obj;
  },
  fromAminoMsg(object: DeleteRoyaltyConfigAuthorizationAminoMsg): DeleteRoyaltyConfigAuthorization {
    return DeleteRoyaltyConfigAuthorization.fromAmino(object.value);
  },
  fromProtoMsg(message: DeleteRoyaltyConfigAuthorizationProtoMsg): DeleteRoyaltyConfigAuthorization {
    return DeleteRoyaltyConfigAuthorization.decode(message.value);
  },
  toProto(message: DeleteRoyaltyConfigAuthorization): Uint8Array {
    return DeleteRoyaltyConfigAuthorization.encode(message).finish();
  },
  toProtoMsg(message: DeleteRoyaltyConfigAuthorization): DeleteRoyaltyConfigAuthorizationProtoMsg {
    return {
      typeUrl: "/likechain.likenft.v1.DeleteRoyaltyConfigAuthorization",
      value: DeleteRoyaltyConfigAuthorization.encode(message).finish()
    };
  }
};
function createBaseCreateListingAuthorization(): CreateListingAuthorization {
  return {
    $typeUrl: "/likechain.likenft.v1.CreateListingAuthorization",
    classId: "",
    nftId: ""
  };
}
export const CreateListingAuthorization = {
  typeUrl: "/likechain.likenft.v1.CreateListingAuthorization",
  encode(message: CreateListingAuthorization, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
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
  },
  fromAmino(object: CreateListingAuthorizationAmino): CreateListingAuthorization {
    const message = createBaseCreateListingAuthorization();
    if (object.class_id !== undefined && object.class_id !== null) {
      message.classId = object.class_id;
    }
    if (object.nft_id !== undefined && object.nft_id !== null) {
      message.nftId = object.nft_id;
    }
    return message;
  },
  toAmino(message: CreateListingAuthorization): CreateListingAuthorizationAmino {
    const obj: any = {};
    obj.class_id = message.classId;
    obj.nft_id = message.nftId;
    return obj;
  },
  fromAminoMsg(object: CreateListingAuthorizationAminoMsg): CreateListingAuthorization {
    return CreateListingAuthorization.fromAmino(object.value);
  },
  fromProtoMsg(message: CreateListingAuthorizationProtoMsg): CreateListingAuthorization {
    return CreateListingAuthorization.decode(message.value);
  },
  toProto(message: CreateListingAuthorization): Uint8Array {
    return CreateListingAuthorization.encode(message).finish();
  },
  toProtoMsg(message: CreateListingAuthorization): CreateListingAuthorizationProtoMsg {
    return {
      typeUrl: "/likechain.likenft.v1.CreateListingAuthorization",
      value: CreateListingAuthorization.encode(message).finish()
    };
  }
};
function createBaseUpdateListingAuthorization(): UpdateListingAuthorization {
  return {
    $typeUrl: "/likechain.likenft.v1.UpdateListingAuthorization",
    classId: "",
    nftId: ""
  };
}
export const UpdateListingAuthorization = {
  typeUrl: "/likechain.likenft.v1.UpdateListingAuthorization",
  encode(message: UpdateListingAuthorization, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
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
  },
  fromAmino(object: UpdateListingAuthorizationAmino): UpdateListingAuthorization {
    const message = createBaseUpdateListingAuthorization();
    if (object.class_id !== undefined && object.class_id !== null) {
      message.classId = object.class_id;
    }
    if (object.nft_id !== undefined && object.nft_id !== null) {
      message.nftId = object.nft_id;
    }
    return message;
  },
  toAmino(message: UpdateListingAuthorization): UpdateListingAuthorizationAmino {
    const obj: any = {};
    obj.class_id = message.classId;
    obj.nft_id = message.nftId;
    return obj;
  },
  fromAminoMsg(object: UpdateListingAuthorizationAminoMsg): UpdateListingAuthorization {
    return UpdateListingAuthorization.fromAmino(object.value);
  },
  fromProtoMsg(message: UpdateListingAuthorizationProtoMsg): UpdateListingAuthorization {
    return UpdateListingAuthorization.decode(message.value);
  },
  toProto(message: UpdateListingAuthorization): Uint8Array {
    return UpdateListingAuthorization.encode(message).finish();
  },
  toProtoMsg(message: UpdateListingAuthorization): UpdateListingAuthorizationProtoMsg {
    return {
      typeUrl: "/likechain.likenft.v1.UpdateListingAuthorization",
      value: UpdateListingAuthorization.encode(message).finish()
    };
  }
};
function createBaseDeleteListingAuthorization(): DeleteListingAuthorization {
  return {
    $typeUrl: "/likechain.likenft.v1.DeleteListingAuthorization",
    classId: "",
    nftId: ""
  };
}
export const DeleteListingAuthorization = {
  typeUrl: "/likechain.likenft.v1.DeleteListingAuthorization",
  encode(message: DeleteListingAuthorization, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
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
  },
  fromAmino(object: DeleteListingAuthorizationAmino): DeleteListingAuthorization {
    const message = createBaseDeleteListingAuthorization();
    if (object.class_id !== undefined && object.class_id !== null) {
      message.classId = object.class_id;
    }
    if (object.nft_id !== undefined && object.nft_id !== null) {
      message.nftId = object.nft_id;
    }
    return message;
  },
  toAmino(message: DeleteListingAuthorization): DeleteListingAuthorizationAmino {
    const obj: any = {};
    obj.class_id = message.classId;
    obj.nft_id = message.nftId;
    return obj;
  },
  fromAminoMsg(object: DeleteListingAuthorizationAminoMsg): DeleteListingAuthorization {
    return DeleteListingAuthorization.fromAmino(object.value);
  },
  fromProtoMsg(message: DeleteListingAuthorizationProtoMsg): DeleteListingAuthorization {
    return DeleteListingAuthorization.decode(message.value);
  },
  toProto(message: DeleteListingAuthorization): Uint8Array {
    return DeleteListingAuthorization.encode(message).finish();
  },
  toProtoMsg(message: DeleteListingAuthorization): DeleteListingAuthorizationProtoMsg {
    return {
      typeUrl: "/likechain.likenft.v1.DeleteListingAuthorization",
      value: DeleteListingAuthorization.encode(message).finish()
    };
  }
};
function createBaseCreateOfferAuthorization(): CreateOfferAuthorization {
  return {
    $typeUrl: "/likechain.likenft.v1.CreateOfferAuthorization",
    classId: "",
    nftId: ""
  };
}
export const CreateOfferAuthorization = {
  typeUrl: "/likechain.likenft.v1.CreateOfferAuthorization",
  encode(message: CreateOfferAuthorization, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
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
  },
  fromAmino(object: CreateOfferAuthorizationAmino): CreateOfferAuthorization {
    const message = createBaseCreateOfferAuthorization();
    if (object.class_id !== undefined && object.class_id !== null) {
      message.classId = object.class_id;
    }
    if (object.nft_id !== undefined && object.nft_id !== null) {
      message.nftId = object.nft_id;
    }
    return message;
  },
  toAmino(message: CreateOfferAuthorization): CreateOfferAuthorizationAmino {
    const obj: any = {};
    obj.class_id = message.classId;
    obj.nft_id = message.nftId;
    return obj;
  },
  fromAminoMsg(object: CreateOfferAuthorizationAminoMsg): CreateOfferAuthorization {
    return CreateOfferAuthorization.fromAmino(object.value);
  },
  fromProtoMsg(message: CreateOfferAuthorizationProtoMsg): CreateOfferAuthorization {
    return CreateOfferAuthorization.decode(message.value);
  },
  toProto(message: CreateOfferAuthorization): Uint8Array {
    return CreateOfferAuthorization.encode(message).finish();
  },
  toProtoMsg(message: CreateOfferAuthorization): CreateOfferAuthorizationProtoMsg {
    return {
      typeUrl: "/likechain.likenft.v1.CreateOfferAuthorization",
      value: CreateOfferAuthorization.encode(message).finish()
    };
  }
};
function createBaseUpdateOfferAuthorization(): UpdateOfferAuthorization {
  return {
    $typeUrl: "/likechain.likenft.v1.UpdateOfferAuthorization",
    classId: "",
    nftId: ""
  };
}
export const UpdateOfferAuthorization = {
  typeUrl: "/likechain.likenft.v1.UpdateOfferAuthorization",
  encode(message: UpdateOfferAuthorization, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
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
  },
  fromAmino(object: UpdateOfferAuthorizationAmino): UpdateOfferAuthorization {
    const message = createBaseUpdateOfferAuthorization();
    if (object.class_id !== undefined && object.class_id !== null) {
      message.classId = object.class_id;
    }
    if (object.nft_id !== undefined && object.nft_id !== null) {
      message.nftId = object.nft_id;
    }
    return message;
  },
  toAmino(message: UpdateOfferAuthorization): UpdateOfferAuthorizationAmino {
    const obj: any = {};
    obj.class_id = message.classId;
    obj.nft_id = message.nftId;
    return obj;
  },
  fromAminoMsg(object: UpdateOfferAuthorizationAminoMsg): UpdateOfferAuthorization {
    return UpdateOfferAuthorization.fromAmino(object.value);
  },
  fromProtoMsg(message: UpdateOfferAuthorizationProtoMsg): UpdateOfferAuthorization {
    return UpdateOfferAuthorization.decode(message.value);
  },
  toProto(message: UpdateOfferAuthorization): Uint8Array {
    return UpdateOfferAuthorization.encode(message).finish();
  },
  toProtoMsg(message: UpdateOfferAuthorization): UpdateOfferAuthorizationProtoMsg {
    return {
      typeUrl: "/likechain.likenft.v1.UpdateOfferAuthorization",
      value: UpdateOfferAuthorization.encode(message).finish()
    };
  }
};
function createBaseDeleteOfferAuthorization(): DeleteOfferAuthorization {
  return {
    $typeUrl: "/likechain.likenft.v1.DeleteOfferAuthorization",
    classId: "",
    nftId: ""
  };
}
export const DeleteOfferAuthorization = {
  typeUrl: "/likechain.likenft.v1.DeleteOfferAuthorization",
  encode(message: DeleteOfferAuthorization, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
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
  },
  fromAmino(object: DeleteOfferAuthorizationAmino): DeleteOfferAuthorization {
    const message = createBaseDeleteOfferAuthorization();
    if (object.class_id !== undefined && object.class_id !== null) {
      message.classId = object.class_id;
    }
    if (object.nft_id !== undefined && object.nft_id !== null) {
      message.nftId = object.nft_id;
    }
    return message;
  },
  toAmino(message: DeleteOfferAuthorization): DeleteOfferAuthorizationAmino {
    const obj: any = {};
    obj.class_id = message.classId;
    obj.nft_id = message.nftId;
    return obj;
  },
  fromAminoMsg(object: DeleteOfferAuthorizationAminoMsg): DeleteOfferAuthorization {
    return DeleteOfferAuthorization.fromAmino(object.value);
  },
  fromProtoMsg(message: DeleteOfferAuthorizationProtoMsg): DeleteOfferAuthorization {
    return DeleteOfferAuthorization.decode(message.value);
  },
  toProto(message: DeleteOfferAuthorization): Uint8Array {
    return DeleteOfferAuthorization.encode(message).finish();
  },
  toProtoMsg(message: DeleteOfferAuthorization): DeleteOfferAuthorizationProtoMsg {
    return {
      typeUrl: "/likechain.likenft.v1.DeleteOfferAuthorization",
      value: DeleteOfferAuthorization.encode(message).finish()
    };
  }
};
function createBaseNewClassAuthorization(): NewClassAuthorization {
  return {
    $typeUrl: "/likechain.likenft.v1.NewClassAuthorization",
    iscnIdPrefix: ""
  };
}
export const NewClassAuthorization = {
  typeUrl: "/likechain.likenft.v1.NewClassAuthorization",
  encode(message: NewClassAuthorization, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
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
  },
  fromAmino(object: NewClassAuthorizationAmino): NewClassAuthorization {
    const message = createBaseNewClassAuthorization();
    if (object.iscn_id_prefix !== undefined && object.iscn_id_prefix !== null) {
      message.iscnIdPrefix = object.iscn_id_prefix;
    }
    return message;
  },
  toAmino(message: NewClassAuthorization): NewClassAuthorizationAmino {
    const obj: any = {};
    obj.iscn_id_prefix = message.iscnIdPrefix;
    return obj;
  },
  fromAminoMsg(object: NewClassAuthorizationAminoMsg): NewClassAuthorization {
    return NewClassAuthorization.fromAmino(object.value);
  },
  fromProtoMsg(message: NewClassAuthorizationProtoMsg): NewClassAuthorization {
    return NewClassAuthorization.decode(message.value);
  },
  toProto(message: NewClassAuthorization): Uint8Array {
    return NewClassAuthorization.encode(message).finish();
  },
  toProtoMsg(message: NewClassAuthorization): NewClassAuthorizationProtoMsg {
    return {
      typeUrl: "/likechain.likenft.v1.NewClassAuthorization",
      value: NewClassAuthorization.encode(message).finish()
    };
  }
};
function createBaseUpdateClassAuthorization(): UpdateClassAuthorization {
  return {
    $typeUrl: "/likechain.likenft.v1.UpdateClassAuthorization",
    classId: ""
  };
}
export const UpdateClassAuthorization = {
  typeUrl: "/likechain.likenft.v1.UpdateClassAuthorization",
  encode(message: UpdateClassAuthorization, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
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
  },
  fromAmino(object: UpdateClassAuthorizationAmino): UpdateClassAuthorization {
    const message = createBaseUpdateClassAuthorization();
    if (object.class_id !== undefined && object.class_id !== null) {
      message.classId = object.class_id;
    }
    return message;
  },
  toAmino(message: UpdateClassAuthorization): UpdateClassAuthorizationAmino {
    const obj: any = {};
    obj.class_id = message.classId;
    return obj;
  },
  fromAminoMsg(object: UpdateClassAuthorizationAminoMsg): UpdateClassAuthorization {
    return UpdateClassAuthorization.fromAmino(object.value);
  },
  fromProtoMsg(message: UpdateClassAuthorizationProtoMsg): UpdateClassAuthorization {
    return UpdateClassAuthorization.decode(message.value);
  },
  toProto(message: UpdateClassAuthorization): Uint8Array {
    return UpdateClassAuthorization.encode(message).finish();
  },
  toProtoMsg(message: UpdateClassAuthorization): UpdateClassAuthorizationProtoMsg {
    return {
      typeUrl: "/likechain.likenft.v1.UpdateClassAuthorization",
      value: UpdateClassAuthorization.encode(message).finish()
    };
  }
};
function createBaseMintNFTAuthorization(): MintNFTAuthorization {
  return {
    $typeUrl: "/likechain.likenft.v1.MintNFTAuthorization",
    classId: ""
  };
}
export const MintNFTAuthorization = {
  typeUrl: "/likechain.likenft.v1.MintNFTAuthorization",
  encode(message: MintNFTAuthorization, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
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
  },
  fromAmino(object: MintNFTAuthorizationAmino): MintNFTAuthorization {
    const message = createBaseMintNFTAuthorization();
    if (object.class_id !== undefined && object.class_id !== null) {
      message.classId = object.class_id;
    }
    return message;
  },
  toAmino(message: MintNFTAuthorization): MintNFTAuthorizationAmino {
    const obj: any = {};
    obj.class_id = message.classId;
    return obj;
  },
  fromAminoMsg(object: MintNFTAuthorizationAminoMsg): MintNFTAuthorization {
    return MintNFTAuthorization.fromAmino(object.value);
  },
  fromProtoMsg(message: MintNFTAuthorizationProtoMsg): MintNFTAuthorization {
    return MintNFTAuthorization.decode(message.value);
  },
  toProto(message: MintNFTAuthorization): Uint8Array {
    return MintNFTAuthorization.encode(message).finish();
  },
  toProtoMsg(message: MintNFTAuthorization): MintNFTAuthorizationProtoMsg {
    return {
      typeUrl: "/likechain.likenft.v1.MintNFTAuthorization",
      value: MintNFTAuthorization.encode(message).finish()
    };
  }
};
function createBaseSendNFTAuthorization(): SendNFTAuthorization {
  return {
    $typeUrl: "/likechain.likenft.v1.SendNFTAuthorization",
    classId: "",
    id: ""
  };
}
export const SendNFTAuthorization = {
  typeUrl: "/likechain.likenft.v1.SendNFTAuthorization",
  encode(message: SendNFTAuthorization, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
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
  },
  fromAmino(object: SendNFTAuthorizationAmino): SendNFTAuthorization {
    const message = createBaseSendNFTAuthorization();
    if (object.class_id !== undefined && object.class_id !== null) {
      message.classId = object.class_id;
    }
    if (object.id !== undefined && object.id !== null) {
      message.id = object.id;
    }
    return message;
  },
  toAmino(message: SendNFTAuthorization): SendNFTAuthorizationAmino {
    const obj: any = {};
    obj.class_id = message.classId;
    obj.id = message.id;
    return obj;
  },
  fromAminoMsg(object: SendNFTAuthorizationAminoMsg): SendNFTAuthorization {
    return SendNFTAuthorization.fromAmino(object.value);
  },
  fromProtoMsg(message: SendNFTAuthorizationProtoMsg): SendNFTAuthorization {
    return SendNFTAuthorization.decode(message.value);
  },
  toProto(message: SendNFTAuthorization): Uint8Array {
    return SendNFTAuthorization.encode(message).finish();
  },
  toProtoMsg(message: SendNFTAuthorization): SendNFTAuthorizationProtoMsg {
    return {
      typeUrl: "/likechain.likenft.v1.SendNFTAuthorization",
      value: SendNFTAuthorization.encode(message).finish()
    };
  }
};