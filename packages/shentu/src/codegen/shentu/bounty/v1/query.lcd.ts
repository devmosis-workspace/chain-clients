import { setPaginationParams } from "../../../helpers";
import { LCDClient } from "@cosmology/lcd";
import { QueryProgramsRequest, QueryProgramsResponseSDKType, QueryProgramRequest, QueryProgramResponseSDKType, QueryFindingsRequest, QueryFindingsResponseSDKType, QueryFindingRequest, QueryFindingResponseSDKType, QueryFindingFingerprintRequest, QueryFindingFingerprintResponseSDKType, QueryProgramFingerprintRequest, QueryProgramFingerprintResponseSDKType } from "./query";
export class LCDQueryClient {
  req: LCDClient;
  constructor({
    requestClient
  }: {
    requestClient: LCDClient;
  }) {
    this.req = requestClient;
    this.programs = this.programs.bind(this);
    this.program = this.program.bind(this);
    this.findings = this.findings.bind(this);
    this.finding = this.finding.bind(this);
    this.findingFingerprint = this.findingFingerprint.bind(this);
    this.programFingerprint = this.programFingerprint.bind(this);
  }
  /* Programs queries all programs based on given status. */
  async programs(params: QueryProgramsRequest = {
    pagination: undefined
  }): Promise<QueryProgramsResponseSDKType> {
    const options: any = {
      params: {}
    };
    if (typeof params?.pagination !== "undefined") {
      setPaginationParams(options, params.pagination);
    }
    const endpoint = `shentu/bounty/v1/programs`;
    return await this.req.get<QueryProgramsResponseSDKType>(endpoint, options);
  }
  /* Program queries program details based on ProgramId. */
  async program(params: QueryProgramRequest): Promise<QueryProgramResponseSDKType> {
    const endpoint = `shentu/bounty/v1/programs/${params.programId}`;
    return await this.req.get<QueryProgramResponseSDKType>(endpoint);
  }
  /* Findings queries findings of a given program. */
  async findings(params: QueryFindingsRequest): Promise<QueryFindingsResponseSDKType> {
    const options: any = {
      params: {}
    };
    if (typeof params?.programId !== "undefined") {
      options.params.program_id = params.programId;
    }
    if (typeof params?.submitterAddress !== "undefined") {
      options.params.submitter_address = params.submitterAddress;
    }
    if (typeof params?.pagination !== "undefined") {
      setPaginationParams(options, params.pagination);
    }
    const endpoint = `shentu/bounty/v1/findings`;
    return await this.req.get<QueryFindingsResponseSDKType>(endpoint, options);
  }
  /* Finding queries Finding information based on programID, FindingId. */
  async finding(params: QueryFindingRequest): Promise<QueryFindingResponseSDKType> {
    const endpoint = `shentu/bounty/v1/findings/${params.findingId}`;
    return await this.req.get<QueryFindingResponseSDKType>(endpoint);
  }
  /* FindingFingerprint queries finding fingerprint based on findingId. */
  async findingFingerprint(params: QueryFindingFingerprintRequest): Promise<QueryFindingFingerprintResponseSDKType> {
    const endpoint = `shentu/bounty/v1/findings/${params.findingId}/fingerprint`;
    return await this.req.get<QueryFindingFingerprintResponseSDKType>(endpoint);
  }
  /* ProgramFingerprint queries program fingerprint based on programId. */
  async programFingerprint(params: QueryProgramFingerprintRequest): Promise<QueryProgramFingerprintResponseSDKType> {
    const endpoint = `shentu/bounty/v1/programs/${params.programId}/fingerprint`;
    return await this.req.get<QueryProgramFingerprintResponseSDKType>(endpoint);
  }
}