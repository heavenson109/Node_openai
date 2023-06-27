// File generated from our OpenAPI spec by Stainless.

import * as Core from '~/core';
import { APIResource } from '~/resource';
import * as API from './';
import { type Uploadable, multipartFormRequestOptions } from '~/core';

export class Transcriptions extends APIResource {
  /**
   * Transcribes audio into the input language.
   */
  async create(
    body: TranscriptionCreateParams,
    options?: Core.RequestOptions,
  ): Promise<Core.APIResponse<Transcription>> {
    return this.post('/audio/transcriptions', await multipartFormRequestOptions({ body, ...options }));
  }
}

export interface Transcription {
  text: string;
}

export interface TranscriptionCreateParams {
  /**
   * The audio file object (not file name) to transcribe, in one of these formats:
   * mp3, mp4, mpeg, mpga, m4a, wav, or webm.
   */
  file: Uploadable;

  /**
   * ID of the model to use. Only `whisper-1` is currently available.
   */
  model: (string & {}) | 'whisper-1';

  /**
   * The language of the input audio. Supplying the input language in
   * [ISO-639-1](https://en.wikipedia.org/wiki/List_of_ISO_639-1_codes) format will
   * improve accuracy and latency.
   */
  language?: string;

  /**
   * An optional text to guide the model's style or continue a previous audio
   * segment. The [prompt](/docs/guides/speech-to-text/prompting) should match the
   * audio language.
   */
  prompt?: string;

  /**
   * The format of the transcript output, in one of these options: json, text, srt,
   * verbose_json, or vtt.
   */
  response_format?: string;

  /**
   * The sampling temperature, between 0 and 1. Higher values like 0.8 will make the
   * output more random, while lower values like 0.2 will make it more focused and
   * deterministic. If set to 0, the model will use
   * [log probability](https://en.wikipedia.org/wiki/Log_probability) to
   * automatically increase the temperature until certain thresholds are hit.
   */
  temperature?: number;
}

export namespace Transcriptions {
  export import Transcription = API.Transcription;
  export import TranscriptionCreateParams = API.TranscriptionCreateParams;
}
