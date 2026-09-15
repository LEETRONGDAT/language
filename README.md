# 100 Ngày Giao Tiếp – V9 Free TTS

Mục tiêu: **không dùng API TTS trả phí, không cần API key, không cần Apple Developer, không cần Mac**.

## Công nghệ audio
- Kokoro là mô hình TTS open-weight; model chính và model Mandarin v1.1-zh được công bố với giấy phép Apache-2.0.
- English: Kokoro-82M, giọng `af_heart` (female) / `am_michael` (male).
- Mandarin: Kokoro-82M-v1.1-zh, giọng `zf_001` (female) / `zm_010` (male).
- Mỗi câu được đọc **2 lần**, các câu nối thành **một track MP3/ngày**, giúp việc phát liên tục đơn giản hơn khi khóa màn hình.

## Tạo audio hoàn toàn miễn phí
Repository cần để **Public** để standard GitHub-hosted runner của GitHub Actions được dùng miễn phí. Workflow thủ công tại:
**Actions → Generate free AI audio (Kokoro) → Run workflow**.

Chọn `start_day` và `end_day`. Workflow sẽ:
1. tải model mở từ Hugging Face;
2. tạo audio;
3. ghép từng ngày thành MP3;
4. commit audio vào repository.

Không có Azure key, không có Google Cloud key, không có ElevenLabs key.

## Lưu ý
- Chất lượng phụ thuộc voice/model; đây là TTS open-source, không phải giọng người thu âm.
- Không nên để mỗi MP3 vượt 100 MB. Track theo ngày được nén 64 kbps để giữ kích thước nhỏ.
- Ứng dụng học trên iPhone vẫn là PWA; hãy bấm Play trên Safari trước khi khóa màn hình để iOS cấp quyền phát media nền.
