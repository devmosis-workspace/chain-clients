import { BinaryWriter } from "../../binary";
import { bytesFromBase64 } from "../../helpers";
/**
 * DataAvailabilityHeader contains the row and column roots of the erasure
 * coded version of the data in Block.Data.
 * Therefor the original Block.Data is arranged in a
 * k × k matrix, which is then "extended" to a
 * 2k × 2k matrix applying multiple times Reed-Solomon encoding.
 * For details see Section 5.2: https://arxiv.org/abs/1809.09044
 * or the Celestia specification:
 * https://github.com/celestiaorg/celestia-specs/blob/master/src/specs/data_structures.md#availabledataheader
 * Note that currently we list row and column roots in separate fields
 * (different from the spec).
 */
export interface DataAvailabilityHeader {
  /** RowRoot_j 	= root((M_{j,1} || M_{j,2} || ... || M_{j,2k} )) */
  rowRoots: Uint8Array[];
  /** ColumnRoot_j = root((M_{1,j} || M_{2,j} || ... || M_{2k,j} )) */
  columnRoots: Uint8Array[];
}
export interface DataAvailabilityHeaderProtoMsg {
  typeUrl: "/celestia.da.DataAvailabilityHeader";
  value: Uint8Array;
}
/**
 * DataAvailabilityHeader contains the row and column roots of the erasure
 * coded version of the data in Block.Data.
 * Therefor the original Block.Data is arranged in a
 * k × k matrix, which is then "extended" to a
 * 2k × 2k matrix applying multiple times Reed-Solomon encoding.
 * For details see Section 5.2: https://arxiv.org/abs/1809.09044
 * or the Celestia specification:
 * https://github.com/celestiaorg/celestia-specs/blob/master/src/specs/data_structures.md#availabledataheader
 * Note that currently we list row and column roots in separate fields
 * (different from the spec).
 */
export interface DataAvailabilityHeaderAmino {
  /** RowRoot_j 	= root((M_{j,1} || M_{j,2} || ... || M_{j,2k} )) */
  row_roots: Uint8Array[];
  /** ColumnRoot_j = root((M_{1,j} || M_{2,j} || ... || M_{2k,j} )) */
  column_roots: Uint8Array[];
}
export interface DataAvailabilityHeaderAminoMsg {
  type: "/celestia.da.DataAvailabilityHeader";
  value: DataAvailabilityHeaderAmino;
}
/**
 * DataAvailabilityHeader contains the row and column roots of the erasure
 * coded version of the data in Block.Data.
 * Therefor the original Block.Data is arranged in a
 * k × k matrix, which is then "extended" to a
 * 2k × 2k matrix applying multiple times Reed-Solomon encoding.
 * For details see Section 5.2: https://arxiv.org/abs/1809.09044
 * or the Celestia specification:
 * https://github.com/celestiaorg/celestia-specs/blob/master/src/specs/data_structures.md#availabledataheader
 * Note that currently we list row and column roots in separate fields
 * (different from the spec).
 */
export interface DataAvailabilityHeaderSDKType {
  row_roots: Uint8Array[];
  column_roots: Uint8Array[];
}
function createBaseDataAvailabilityHeader(): DataAvailabilityHeader {
  return {
    rowRoots: [],
    columnRoots: []
  };
}
export const DataAvailabilityHeader = {
  typeUrl: "/celestia.da.DataAvailabilityHeader",
  encode(message: DataAvailabilityHeader, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.rowRoots) {
      writer.uint32(10).bytes(v!);
    }
    for (const v of message.columnRoots) {
      writer.uint32(18).bytes(v!);
    }
    return writer;
  },
  fromJSON(object: any): DataAvailabilityHeader {
    return {
      rowRoots: Array.isArray(object?.rowRoots) ? object.rowRoots.map((e: any) => bytesFromBase64(e)) : [],
      columnRoots: Array.isArray(object?.columnRoots) ? object.columnRoots.map((e: any) => bytesFromBase64(e)) : []
    };
  },
  fromPartial(object: Partial<DataAvailabilityHeader>): DataAvailabilityHeader {
    const message = createBaseDataAvailabilityHeader();
    message.rowRoots = object.rowRoots?.map(e => e) || [];
    message.columnRoots = object.columnRoots?.map(e => e) || [];
    return message;
  },
  fromAmino(object: DataAvailabilityHeaderAmino): DataAvailabilityHeader {
    return {
      rowRoots: Array.isArray(object?.row_roots) ? object.row_roots.map((e: any) => e) : [],
      columnRoots: Array.isArray(object?.column_roots) ? object.column_roots.map((e: any) => e) : []
    };
  },
  toAmino(message: DataAvailabilityHeader): DataAvailabilityHeaderAmino {
    const obj: any = {};
    if (message.rowRoots) {
      obj.row_roots = message.rowRoots.map(e => e);
    } else {
      obj.row_roots = [];
    }
    if (message.columnRoots) {
      obj.column_roots = message.columnRoots.map(e => e);
    } else {
      obj.column_roots = [];
    }
    return obj;
  },
  fromAminoMsg(object: DataAvailabilityHeaderAminoMsg): DataAvailabilityHeader {
    return DataAvailabilityHeader.fromAmino(object.value);
  },
  fromProtoMsg(message: DataAvailabilityHeaderProtoMsg): DataAvailabilityHeader {
    return DataAvailabilityHeader.decode(message.value);
  },
  toProto(message: DataAvailabilityHeader): Uint8Array {
    return DataAvailabilityHeader.encode(message).finish();
  },
  toProtoMsg(message: DataAvailabilityHeader): DataAvailabilityHeaderProtoMsg {
    return {
      typeUrl: "/celestia.da.DataAvailabilityHeader",
      value: DataAvailabilityHeader.encode(message).finish()
    };
  }
};