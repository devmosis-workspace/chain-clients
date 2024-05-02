import { Rpc } from "../../../helpers";
import { BinaryReader } from "../../../binary";
import { QueryClient, createProtobufRpcClient } from "@cosmjs/stargate";
import { QueryProgramsRequest, QueryProgramsResponse, QueryProgramRequest, QueryProgramResponse, QueryFindingsRequest, QueryFindingsResponse, QueryFindingRequest, QueryFindingResponse, QueryFindingFingerprintRequest, QueryFindingFingerprintResponse, QueryProgramFingerprintRequest, QueryProgramFingerprintResponse } from "./query";
/** Query defines the gRPC querier service for bounty module */
export interface Query {
  /** Programs queries all programs based on given status. */
  programs(request?: QueryProgramsRequest): Promise<QueryProgramsResponse>;
  /** Program queries program details based on ProgramId. */
  program(request: QueryProgramRequest): Promise<QueryProgramResponse>;
  /** Findings queries findings of a given program. */
  findings(request: QueryFindingsRequest): Promise<QueryFindingsResponse>;
  /** Finding queries Finding information based on programID, FindingId. */
  finding(request: QueryFindingRequest): Promise<QueryFindingResponse>;
  /** FindingFingerprint queries finding fingerprint based on findingId. */
  findingFingerprint(request: QueryFindingFingerprintRequest): Promise<QueryFindingFingerprintResponse>;
  /** ProgramFingerprint queries program fingerprint based on programId. */
  programFingerprint(request: QueryProgramFingerprintRequest): Promise<QueryProgramFingerprintResponse>;
}
export class QueryClientImpl implements Query {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.programs = this.programs.bind(this);
    this.program = this.program.bind(this);
    this.findings = this.findings.bind(this);
    this.finding = this.finding.bind(this);
    this.findingFingerprint = this.findingFingerprint.bind(this);
    this.programFingerprint = this.programFingerprint.bind(this);
  }
  programs(request: QueryProgramsRequest = {
    pagination: undefined
  }): Promise<QueryProgramsResponse> {
    const data = QueryProgramsRequest.encode(request).finish();
    const promise = this.rpc.request("shentu.bounty.v1.Query", "Programs", data);
    return promise.then(data => QueryProgramsResponse.decode(new BinaryReader(data)));
  }
  program(request: QueryProgramRequest): Promise<QueryProgramResponse> {
    const data = QueryProgramRequest.encode(request).finish();
    const promise = this.rpc.request("shentu.bounty.v1.Query", "Program", data);
    return promise.then(data => QueryProgramResponse.decode(new BinaryReader(data)));
  }
  findings(request: QueryFindingsRequest): Promise<QueryFindingsResponse> {
    const data = QueryFindingsRequest.encode(request).finish();
    const promise = this.rpc.request("shentu.bounty.v1.Query", "Findings", data);
    return promise.then(data => QueryFindingsResponse.decode(new BinaryReader(data)));
  }
  finding(request: QueryFindingRequest): Promise<QueryFindingResponse> {
    const data = QueryFindingRequest.encode(request).finish();
    const promise = this.rpc.request("shentu.bounty.v1.Query", "Finding", data);
    return promise.then(data => QueryFindingResponse.decode(new BinaryReader(data)));
  }
  findingFingerprint(request: QueryFindingFingerprintRequest): Promise<QueryFindingFingerprintResponse> {
    const data = QueryFindingFingerprintRequest.encode(request).finish();
    const promise = this.rpc.request("shentu.bounty.v1.Query", "FindingFingerprint", data);
    return promise.then(data => QueryFindingFingerprintResponse.decode(new BinaryReader(data)));
  }
  programFingerprint(request: QueryProgramFingerprintRequest): Promise<QueryProgramFingerprintResponse> {
    const data = QueryProgramFingerprintRequest.encode(request).finish();
    const promise = this.rpc.request("shentu.bounty.v1.Query", "ProgramFingerprint", data);
    return promise.then(data => QueryProgramFingerprintResponse.decode(new BinaryReader(data)));
  }
}
export const createRpcQueryExtension = (base: QueryClient) => {
  const rpc = createProtobufRpcClient(base);
  const queryService = new QueryClientImpl(rpc);
  return {
    programs(request?: QueryProgramsRequest): Promise<QueryProgramsResponse> {
      return queryService.programs(request);
    },
    program(request: QueryProgramRequest): Promise<QueryProgramResponse> {
      return queryService.program(request);
    },
    findings(request: QueryFindingsRequest): Promise<QueryFindingsResponse> {
      return queryService.findings(request);
    },
    finding(request: QueryFindingRequest): Promise<QueryFindingResponse> {
      return queryService.finding(request);
    },
    findingFingerprint(request: QueryFindingFingerprintRequest): Promise<QueryFindingFingerprintResponse> {
      return queryService.findingFingerprint(request);
    },
    programFingerprint(request: QueryProgramFingerprintRequest): Promise<QueryProgramFingerprintResponse> {
      return queryService.programFingerprint(request);
    }
  };
};