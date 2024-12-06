function showToast({
  message,
  type = 'success',
  duration = 3000,
  position = 'right',
  gravity = 'top',
} = {}) {
  Toastify({
    text: message,
    duration: duration,
    close: true,
    gravity: gravity,
    position: position,
    backgroundColor:
      type === 'success'
        ? 'green'
        : type === 'error'
          ? 'red'
          : type === 'warning'
            ? 'orange'
            : 'blue',
    stopOnFocus: true,
  }).showToast();
}