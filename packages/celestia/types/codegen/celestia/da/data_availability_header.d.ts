import { BinaryWriter } from "../../binary";
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
    row_roots?: string[];
    /** ColumnRoot_j = root((M_{1,j} || M_{2,j} || ... || M_{2k,j} )) */
    column_roots?: string[];
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
export declare const DataAvailabilityHeader: {
    typeUrl: string;
    encode(message: DataAvailabilityHeader, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): DataAvailabilityHeader;
    fromPartial(object: Partial<DataAvailabilityHeader>): DataAvailabilityHeader;
    fromAmino(object: DataAvailabilityHeaderAmino): DataAvailabilityHeader;
    toAmino(message: DataAvailabilityHeader): DataAvailabilityHeaderAmino;
    fromAminoMsg(object: DataAvailabilityHeaderAminoMsg): DataAvailabilityHeader;
    fromProtoMsg(message: DataAvailabilityHeaderProtoMsg): DataAvailabilityHeader;
    toProto(message: DataAvailabilityHeader): Uint8Array;
    toProtoMsg(message: DataAvailabilityHeader): DataAvailabilityHeaderProtoMsg;
};
