
#ifdef __cplusplus
#define EXTERN extern "C"
#else
#define EXTERN
#endif

char* secret() {
  char *s = "secret";
  return s;
}

