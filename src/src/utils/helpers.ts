export function escapeXml(str: string): string {
  return str.replace(/[&<>'"]/g, (ch) => {
    const map: Record<string, string> = {
      '&': '&amp;',
      '<': '&lt;',
      '>': '&gt;',
      "'": '&apos;',
      '"': '&quot;',
    };
    return map[ch] || ch;
  });
}

export function padStart(num: number, size: number): string {
  return String(num).padStart(size, '0');
}

export function getCardGradient(theme: 'red' | 'gold' | 'green'): string {
  const gradients = {
    red: 'linear-gradient(135deg, #cc0000 0%, #8b0000 50%, #dc143c 100%)',
    gold: 'linear-gradient(135deg, #b8860b 0%, #8b6914 50%, #daa520 100%)',
    green: 'linear-gradient(135deg, #2e7d32 0%, #1b5e20 50%, #43a047 100%)',
  };
  return gradients[theme];
}

export function getGradientColors(theme: 'red' | 'gold' | 'green'): [string, string] {
  const colors: Record<string, [string, string]> = {
    red: ['#cc0000', '#dc143c'],
    gold: ['#b8860b', '#daa520'],
    green: ['#2e7d32', '#43a047'],
  };
  return colors[theme];
}
