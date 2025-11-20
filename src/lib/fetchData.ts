import axios from 'axios'
import { InputJson } from '../types'

export async function fetchInputJson(): Promise<InputJson> {
  const response = await axios.get<InputJson>('/data/data.json')
  return response.data
}