import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // THÊM DÒNG DƯỚI ĐÂY:
  // Thay 'ten-repo-cua-ban' bằng tên chính xác repository trên GitHub
base: "/clock_frontend/"
})